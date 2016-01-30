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

(def init-state {:text "In memory lanes, a sliding puzzle game..."
                 :state game-init-state
                 :user {:tries 0}
                 :progress :start
                 :hidden-tile-num true
                 :timer 0
                 :user-name "" 
                 :encourage-msg ""
                 :background-img ""
                 })

(defn update-game [key val]
  (swap! game-state update-in [key] #(identity val)))

(defn game-finished [state]
  (= (:progress state) :done))

(defn inc-time []
  (do
    (swap! game-state 
           update-in
           [:timer]
           inc)
    (let [time (mod (:timer @game-state) 600)
          f (fn [x] (update-game :encourage-msg x))
          u-n (:user-name @game-state)]
      (cond
        (< time 8) (f "Go.. Go. Go..")
        (< time 15) (f "Press arrow keys faster..")
        (< time 28) (f (str "Remember " u-n ".. If you have a dream, don't wait. Act."))
        (< time 50) (f "We all make choices, but in the end our choices make us.")
        (< time 75) (f "There is no shortcut to perfection... Hard traning is the only way.")
        (< time 120) (f "Maybe we'd fall short. Maybe we'd never even come close. But someone, someday, would know we'd tried.")
        (< time 180) (f (str u-n ".. your actions have meaning only if they hold true to your ideals."))
        (< time 300) (f "You don't need a reason to play this game.. again.")
        (< time 600) (f (str "You can always refresh to restart the game.. Meet you again.. " u-n))))))

(defn timer-start [] (js/setInterval inc-time 1000))

(defonce timer-update (timer-start))

(declare move-cursor)
(declare dir->action)

(defn pos-in-game [num]
  (ffirst (filter (fn [x]
                   (= (:num (second x))
                      num))
                 (map-indexed vector (flatten (:state @game-state))))))

(defn tile-com [tile]
  (let [tile-num (pos-in-game (:num tile))]
    [:div.tile
     {:on-click #(move-cursor
                  (dir->action (let [v (game/move-to-tile
                                        (:state @game-state)
                                        tile-num)]
                                 (println "move-to-tile " v)
                                 v)))}
     [:div.number {:hidden (:hidden-tile-num @game-state)} (:num tile)]
     [:img {:src (:img-src tile) 
            :width "200px" 
            :height "200px" 
            :hidden (not (:hidden-tile-num @game-state))
            :class (if (= (:type tile) :cursor)
                     "cursor-tile"
                     "normal-tile")}]]))

(defn tiles-com [tiles]
  (into [:div.tiles-row ] (map tile-com tiles)))

(defn get-val [event]
  (-> event .-target .-value))

(defn show-hide-elem [id show]
  (if-let [div (.getElementById js/document id)]
    (set! (-> div .-style .-display) (if show "block" "none"))))

(defn show-game []
  (show-hide-elem "game-play" true))

(defn hide-intro []
  (show-hide-elem "game-intro" false))

(defn is-enter? [event]
  (if-let [code (-> event .-key)]
    (= code "Enter")
    false))

(defn game-app 
  []
  [:div.container
   [:div.intro {:id "game-intro"}
    [:div.welcome-msg "I would like to remember you. Your name, please."]
    [:div.name
     [:input {:type "text"
              :placeholder "your name"
              :on-key-press #(if (and (is-enter? %) (> (count (get-val %)) 0))
                               (do
                                 (hide-intro)
                                 (update-game :user-name (get-val %))
                                 (show-game)))}]]]
   [:div.game {:hidden true
               :id "game-play"
               :background-image (:background-img @game-state)}
    [:div.title (:text @game-state)]
    [:div.contents
     [:div.left-container
      [:div.clock (clojure.string/join "" [(:timer @game-state)])]
      [:div.secs "secs"]
      [:div.encourage-msg (:encourage-msg @game-state)]]
     [:div.center-container
      (into [:div.pictures ] (map tiles-com (:state @game-state)))]
     [:div.right-container
      [:button
       {:on-click #(swap! game-state update-in [:hidden-tile-num] not)
        :class "action-button shadow animate green"} "Hint."]]]]])

(defn on-js-reload []
  (do 
    (println "Reloaded...")
    (reset! game-state init-state)
    (reagent/render-component [game-app]
                              (. js/document (getElementById "app")))))

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

(def dir->action
  {:up game/move-up
   :down game/move-down
   :left game/move-left
   :right game/move-right})

(defn game-done [new-state]
  (do
    (js/clearInterval timer-update)
    (update-game :state new-state)
    (update-game :progress :done)
    (set! (-> js/document .-body .-style .-backgroundImage) "url('/images/main.jpg')")
    (js/alert "Great.. you did it.")))

(defn move-cursor [direction-fn]
  (when-not (game-finished @game-state)
    (when-let [f direction-fn]
      (let [curr-state (:state @game-state)
            new-state (make-game (f curr-state))
            done (game/is-done? new-state)]
        (do 
          (println new-state)
          (if done
            (game-done new-state)
            (if (= new-state curr-state)
              (js/alert "not right move.")
              (update-game :state new-state))))))))

(defn handle-keydown [e]
  (do
    (move-cursor (action (codename (.-keyCode e))))))

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


