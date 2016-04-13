(ns org.rerenderer.game-of-life.view
  (:require [rerenderer.primitives :refer [rectangle]]))

(def cell-size 40)

(defn cell
  [[x y]]
  (let [cell-x (* cell-size x)
        cell-y (* cell-size y)]
    (rectangle {:x cell-x
                :y cell-y
                :width cell-size
                :height cell-size
                :color "green"})))

(defn root-view
  [{:keys [cells]}]
  (rectangle {:x 0
              :y 0
              :width 1920
              :height 1080
              :color "white"}
    (for [cell-data cells]
      (cell cell-data))))
