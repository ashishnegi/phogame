(ns phogame.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

(defonce game-state (atom {:text "Welcome to Photogames... !"
                           :img-src "images/shiv.jpg"
                           :canvas {:id "canvas"}}))

(defn get-scaled-canvas [img width height]
  (let [canvas (.createElement js/document "canvas")
        context (.getContext canvas "2d")
        img-width (.-width img)
        img-height (.-height img)]
    (do
      (println "width and height " img-width img-height width height)
      (.drawImage context img 0 0 width height)
      canvas)))

(defn load-image [img-path]
  (let [img (js/Image.)]
    (do (set! (.-src img) img-path)
        img)))

(defn add-img-canvas [img-path width height]
  (let [img (load-image img-path)]
    (set! (.-onload img) 
          (fn []
            (let [canvas (get-scaled-canvas img width height)]
              (do (println "here is canvas : " canvas)
                  (swap! game-state (fn [gs c] (assoc @gs :canvas c)) canvas)))))))

(defn hello-world []
  (let [count (atom 1)]
    (fn []
      [:div 
       [:h1 (:text @game-state)]
       [:div (do (swap! count inc) (str "count is " @count))]
       [:canvas (:canvas @game-state)]])))

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(set! (.-onload js/document) 
      (fn []
        (add-img-canvas (:img-src @game-state) 100 130)))

;;(. js/document onload)

;;(def img (load-image (:img-src @game-state)))


;;(def canvas1 (get-scaled-canvas img 100 130))

