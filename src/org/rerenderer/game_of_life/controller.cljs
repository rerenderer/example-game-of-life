(ns org.rerenderer.game-of-life.controller
  "Code based on https://github.com/sebastianbenz/clojure-game-of-life/"
  (:require-macros [cljs.core.async.macros :refer [go-loop go]])
  (:require [clojure.set :as set]
            [cljs.core.async :refer [<! timeout]]))

(def under-population 1)
(def over-population 4)
(def parent-count 3)

(def neighbour-offsets
  (let [digits (range -1 2)]
    (for [x digits y digits
          :let [value [x y]]
          :when (not (= value [0 0]))] value)))

(defn all-neighbours
  [cell]
  (for [offset neighbour-offsets] (map + offset cell)))

(defn alive-neighbours
  [cells cell]
  (filter #(contains? cells %) (all-neighbours cell)))

(defn dead-neighbours
  [cells cell]
  (filter #(not (contains? cells %)) (all-neighbours cell)))

(defn regulate
  [cells]
  (filter #(let [alive-neighbour-count (count (alive-neighbours cells %))]
            (and
              (> alive-neighbour-count under-population)
              (< alive-neighbour-count over-population))) cells))

(defn dead-neighbour-cells
  [cells]
  (reduce set/union (for [cell cells] (dead-neighbours cells cell))))

(defn reproduce
  [cells]
  (filter #(= parent-count (count (alive-neighbours cells %))) (dead-neighbour-cells cells)))

(defn tick
  [cells]
  (set/union (set (reproduce cells)) (set (regulate cells))))

(defn main-controller
  [event-ch state-atom options]
  (go-loop []
           (<! (timeout 100))
           (swap! state-atom update :cells tick)
           (recur)))
