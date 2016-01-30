# phogame

A sliding puzzle game with photos.. single player game.

## Overview

Play with friends to know who remembers the memories best.
Made for fun, and also for learning basic Clojure and ClojureScript.
Though code needs improvement, it still amazes me to see so much to get 
so fast from a beginner. :)

## Setup
For development :
Change `index.html` to load `phogame.js` from `/dev` rather than from `/min`

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min # index.html should load /min/phogame.js
    lein uberjar # for server side.

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2014 

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
