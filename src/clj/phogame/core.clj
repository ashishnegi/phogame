(ns phogame.core
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]

            [clojure.java.io :as io]

            [ring.middleware.stacktrace :as trace]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :as cookie]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.basic-authentication :as basic]
            [ring.util.response :as response]

            [environ.core :refer [env]]))

(defroutes app
  (GET "/" []
       (response/resource-response "index.html" {:root "public"}))

  ;; Give all resources.
  (route/resources "/")

  ;; Give 404 for others.
  (ANY "*" []
       (route/not-found (slurp (io/resource "public/404.html")))))

(defn wrap-error-page [handler]
  (fn [req]
    (try (handler req)
         (catch Exception e
           {:status 500
            :headers {"Content-Type" "text/html"}
            :body (slurp (io/resource "public/500.html"))}))))

(defn wrap-app [app]
  ;; TODO: heroku config:add SESSION_SECRET=$RANDOM_16_CHARS
  (let [store (cookie/cookie-store {:key (or (env :session-secret)
                                             "ADF2348e3347hdf6")})]
    (-> app
        ((if (env :production)
           wrap-error-page
           trace/wrap-stacktrace))
        (site {:session {:store store}}))))

(defn -main [& [port]]
  (do (println "inside main.")
      (let [port (Integer. (or port (env :port) 5000))]
        (jetty/run-jetty (wrap-app #'app) {:port port :join? false}))))

;; For interactive development:
(def ring-app (wrap-app #'app))

