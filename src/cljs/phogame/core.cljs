(ns phogame.core
  (:require [reagent.core :as reagent :refer [atom]]
            [phogame.game :as game]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defonce game-state (atom {}))

(defn add-img [tile]
  (assoc tile 
         :img-src 
         (clojure.string/join "" ["images/chunk" (:num tile) ".jpg"])))

(defn make-game [state]
  (game/apply-fn state add-img))

(def game-init-state (make-game game/init-state))

(def init-state {:text "In memory lanes..."
                 :state game-init-state
                 :user {:tries 0}
                 :progress :start
                 :hidden-tile-num true
                 :timer 0
                 })

(defn game-finished [state]
  (= (:progress state) :done))

(defonce timer-update (js/setInterval (fn []
                                       (swap! game-state 
                                              update-in
                                              [:timer]
                                              inc)) 
                                     1000))
(defn tile-com [tile]
  [:div.tile 
   [:div.number {:hidden (:hidden-tile-num @game-state)} (:num tile)]
   [:img {:src (:img-src tile) 
          :width "200px" 
          :height "200px" 
          :hidden (not (:hidden-tile-num @game-state))
          :class (if (= (:type tile) :cursor)
                   "cursor-tile"
                   "normal-tile")}]])

(defn tiles-com [tiles]
  (into [:div.tiles-row ] (map tile-com tiles)))

(defn game-app 
  []
  [:div
   [:div.title (:text @game-state)]
   (into [:div ] (map tiles-com (:state @game-state)))
   [:div
    [:div.clock (clojure.string/join "" ["Time : " (:timer @game-state)])]
    [:button.tips 
     {:on-click #(swap! 
                  game-state update-in [:hidden-tile-num] not)} "Tips"]]])

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
  (when-not (game-finished @game-state)
    (when-let [f (action (codename (.-keyCode e)))]
      (do (.preventDefault e)
          (let [curr-state (:state @game-state)
                new-state (make-game (f curr-state))
                done (game/is-done? new-state)]
            (do 
              (println new-state)
              (if done
                (do
                  (js/alert "Great.. you did it.")
                  (swap! game-state update-in [:progress] (fn [x] :done))))
              (if (= new-state curr-state)
                (js/alert "not right move.")
                (swap! game-state (fn [gs]
                                    (assoc gs :state new-state))))))))))

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

