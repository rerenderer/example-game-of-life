(ns figwheel.connect (:require [figwheel.client] [org.rerenderer.game-of-life.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/org.rerenderer.game-of-life.core.on-reload (apply js/org.rerenderer.game-of-life.core.on-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'org.rerenderer.game-of-life.core/on-reload' is missing"))), :build-id "main", :websocket-url "ws://192.168.2.110:3449/figwheel-ws"})

