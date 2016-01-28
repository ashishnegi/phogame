(defproject phogame "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [reagent "0.5.0"]

                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-jetty-adapter "1.2.2"]
                 [ring/ring-devel "1.2.2"]
                 [ring-basic-authentication "1.0.5"]
                 [environ "0.5.0"]]

  :min-lein-version "2.0.0"
  
  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-3"]
            [lein-ring "0.9.7"]
            [environ/environ.lein "0.2.1"]]

  :hooks [environ.leiningen.hooks]

  :uberjar-name "phogame-standalone.jar"
  
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  
  :ring {:handler phogame.core/ring-app
         :nrel {:start? true
                :port 9998}}

  :profiles {:production
             {:env {:production true}}             

             :dev
             {:dependencies [[javax.servlet/servlet-api "2.5"]
                             [ring/ring-mock "0.3.0"]]
              :env {:production false}}}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/cljs"]

                :figwheel {:on-jsload "phogame.core/on-js-reload"}

                :compiler {:main phogame.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/phogame.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :source-map true}}
               ;; This next build is an compressed minified build for
               ;; production. You can build this with:
               ;; lein cljsbuild once min
               {:id "min"
                :source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/compiled/phogame.min.js"
                           :main phogame.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process 
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
