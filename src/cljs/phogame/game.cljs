(ns phogame.game
  ;;(:require [clojure.core.typed :as t])
  )

(defrecord Tile [num type])

(defn make-tile [num type]
  (Tile. num type))

;; initial position of the tiles.
;; (def init-pos [[1 2 3]
;;                [4 6 5]])

;; (def init-pos [[2 4 1 6]
;;                [9 8 3 5]
;;                [7 11 10 12]])

(def init-pos [[2 3 5]
               [1 8 4]
               [7 9 6]])

;; num of tiles in a row/col.
(def ntiles-row 3)
(def ntiles-col 3)
(def ntiles (* ntiles-row ntiles-col))

(defn make-game-tile [num]
  (if (== num ntiles)
    (make-tile num :cursor) ;; cursor is empty box.
    (make-tile num :tile))) ;; other tiles having images/number are tiles.

(defn apply-fn [state fn]
  (vec (map vec (partition ntiles-col
                           (map fn (flatten state))))))

;; initial game state.
(def init-state (apply-fn init-pos make-game-tile))

(defn is-cursor? [tile]
  (= :cursor (:type tile)))

(defn has-cursor? [tiles-row]
  (not (empty? 
        (filter is-cursor? tiles-row))))

(defn can-move-up? 
  "if cursor is not in first row then we can move up"
  [game]
  (not (has-cursor? (first game))))

(defn can-move-down?
  [game]
  (not (has-cursor? (last game))))

(defn can-move-left?
  [game]
  (not (has-cursor? (map first game))))

(defn can-move-right?
  [game]
  (not (has-cursor? (map last game))))

(defrecord Position [^int row ^int col])

;; return the current position of cursor in the game.
(defn cursor-pos [game]
  (if-let [pos-val (first (filter (fn [[_ x]] (is-cursor? x)) (map-indexed vector (flatten game))))]
    (let [pos (first pos-val)
          row (int (/ pos ntiles-col))
          col (int (- pos (* row ntiles-col)))]
      (Position. row col))))

(defn val-game [game row col]
  (:num (nth (nth game row) col)))

(defn make-cursor-tile []
  (make-tile ntiles :cursor))

;; (t/ann move-up [(t/Vec (t/Vec Tile)) -> (t/Vec (t/Vec Tile))])

(def direction [:up :right :down :left])

(defn move-cursor [game can-move-fn? row-fn col-fn]
  (if (can-move-fn? game)
    (let [{row :row col :col} (cursor-pos game)
          next-row (row-fn row)
          next-col (col-fn col)
          val-above (val-game game next-row next-col)]
      (if (and (>= next-row 0) (>= next-col 0) (< next-row ntiles-row) (< next-col ntiles-col))
        (-> game
            (update-in [row col] (fn [_ val] (make-game-tile val)) val-above)
            (update-in [next-row next-col] (fn [x] (make-cursor-tile))))
        game))
    game))

(defn move-up 
  ;; move the cursor up.
  [game]
  (move-cursor game can-move-up? dec identity))

(defn move-down
  "move the cursor down."
  [game]
  (move-cursor game can-move-down? inc identity))

(defn move-left 
  "move the cursor left"
  [game]
  (move-cursor game can-move-left? identity dec))

(defn move-right
  "move the cursor right"
  [game]
  (move-cursor game can-move-right? identity inc))

(defn is-done? [game]
  (if (empty? game)
    (println "Error")
    (empty?
     (filter (fn [[i {num :num}]]
               (not (= (inc i) num)))
             (map-indexed vector (flatten game))))))


