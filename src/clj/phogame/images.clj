(ns phogame.images
  (:require [clojure.java.io :as io])
  (:import  [javax.imageio.ImageIO]))


(defn div-images [image-path rows cols chunk-name]
  (->> image-path
       (io/file) ;; open up File from image-path.
       ((fn [file]
          (with-open [f (io/input-stream file)]
            (-> f
             ;;(java.io.FileInputStream.) ;; make input-stream.
             (javax.imageio.ImageIO/read) ;; gives the image.
             ;; write chunks to the disk.
             ((fn [img]
                (let [width-img (.getWidth img)
                      height-img (.getHeight img)
                      width-chunk (int (/ width-img cols))
                      height-chunk (int (/ height-img rows))]
                  (doall (for [r (range rows)
                               c (range cols)]
                           (let [n (inc (+ c (* r cols)))
                                 chunk-file-rc (io/file
                                                (clojure.string/join "" [chunk-name n ".jpg"]))]
                             (-> img
                                 (.getSubimage
                                  (int (* c width-chunk))
                                  (int (* r height-chunk))
                                  width-chunk
                                  height-chunk)
                                 (javax.imageio.ImageIO/write "jpg" chunk-file-rc))))))))))))))

;; (div-images
;;  "C:/Users/asnegi/mystuff/clojure/proj/phogame/resources/public/images/main.jpg"
;;  4 3
;;  "C:/Users/asnegi/mystuff/clojure/proj/phogame/resources/public/images/chunk")
