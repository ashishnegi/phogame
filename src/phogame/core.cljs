(ns phogame.core
  (:require [reagent.core :as reagent :refer [atom]]
            [phogame.game :as game]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defonce game-state (atom {}))

(def init-state {:text "Welcome to Photogames... !"
                 :state game/init-state
                 :user {:tries 0}
                 :done false
                 })

(defn tile-com [tile]
  [:div.tile 
   [:div.number (:num tile)]])

(defn tiles-com [tiles]
  (into [:div.tiles-row ] (map tile-com tiles)))

(defn game-app 
  []
  [:div
   [:div.title (:text @game-state)]
   (into [:div ] (map tiles-com (:state @game-state)))])

(defn on-js-reload []
  (do 
    (println "Reloaded...")
    (reset! game-state init-state)))

(def codename
  {37 "LEFT"
   38 "UP"
   39 "RIGHT"
   40 "DOWN"})

(def action
  {"LEFT" game/move-left
   "RIGHT" game/move-right
   "UP" game/move-up
   "DOWN" game/move-down})

(defn handle-keydown [e]
  (when-not (:done @game-state)
    (when-let [f (action (codename (.-keyCode e)))]
      (do (.preventDefault e)
          (let [curr-state (:state @game-state)
                new-state (f curr-state)
                done (game/is-done? new-state)]
            (if done
              (swap! game-state update-in [:done] true))
            (if (= new-state curr-state)
              (;; make an error sound
               )
              (swap! game-state (fn [gs]
                                  (assoc gs :state new-state)))))))))

(defn init []
  (do
    (on-js-reload)
    (.addEventListener js/document "keydown" handle-keydown)
    (reagent/render-component [game-app]
                          (. js/document (getElementById "app")))))

(defonce start
  (init))

;; Game is a [4 X 4] grid of images.
;; Each image would have a number.
;; Images would be randomly assigned a place.
;; Their would be one empty slot which would not have any image.
;; This spot can be swaped with another image from any of its four
;; corners. This would be the only way to move the images.
;; Game ends when all 16 images are at their respective slot.  

;; Take input from user.
;; Test if valid-move.
;; Make the change in game-state for valid move.
;; Check if game is over. If yes.. congratulate,
;; Otherwise continue.

;; Change other game theory goodies like time and tries.

;; load photos from server.



