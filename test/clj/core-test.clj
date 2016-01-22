(ns phogame.core-test
  (:use clojure.test
        ring.mock.request
        phogame.core))

(deftest core-app
  (testing "users endpoint"
    (let [response (app (request :get "/"))]
      (is (= (:status response) 200))
      (is (= (get-in response [:headers "Content-Type"]) "application-json")))))

