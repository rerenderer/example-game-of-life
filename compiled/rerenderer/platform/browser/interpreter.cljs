(ns rerenderer.platform.browser.interpreter
  (:require [cljs.core.match :refer-macros [match]]))

(def refs-cache (atom {'document js/document}))

(defn extract-var
  [refs var]
  (match var
    [:static x] (aget js/window x)
    [:ref x] (refs x)
    [:val x] x))

(defn create-instance
  "Creates an instance of `cls` with `args` and puts it in `refs`."
  [refs [_ ref-id] cls args]
  (let [cls (extract-var refs cls)
        js-args (clj->js (into [nil] (map #(extract-var refs %) args)))
        constructor (.. js/Function -prototype -bind (apply cls js-args))
        inst (new constructor)]
    (assoc refs ref-id inst)))

(defn set-attr
  "Sets `value` to `attr` of `ref`."
  [refs obj attr value]
  (aset (extract-var refs obj) attr (extract-var refs value))
  refs)

(defn get-attr
  "Gets value of `attr` of `ref` and puts it in `refs`."
  [refs [_ result-ref] ref attr]
  (assoc refs result-ref (aget (extract-var refs ref) attr)))

(defn call-method
  "Calls `method` of `var` with `args` and puts result in `refs`."
  [refs [_ result-ref] var method args]
  (let [obj (extract-var refs var)
        js-args (clj->js (mapv #(extract-var refs %) args))
        call-result (.apply (aget obj method) obj js-args)]
    (assoc refs result-ref call-result)))

(defn free
  "Removes `ref` from `refs`."
  [refs [_ ref]]
  (dissoc refs ref))

(defn interpret-instruction
  "Interpretes a single `instruction` of script and returns changed `refs`."
  [refs instruction]
  (try
    (match instruction
      [:new result-var cls args] (create-instance refs result-var cls args)
      [:set var attr value] (set-attr refs var attr value)
      [:get result-var var attr] (get-attr refs result-var var attr)
      [:call result-var var method args] (call-method refs result-var var
                                                      method args)
      [:free var] (free refs var))
    (catch js/Error e
      (.warn js/console "Can't execute instruction" instruction ":" e)
      (throw e))))

(defn interpret!
  "Interpretes `script` and returns hash-map with vars."
  [script]
  (swap! refs-cache #(reduce interpret-instruction % script)))
