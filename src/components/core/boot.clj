(ns components.core.boot
  (:require
   [ak-dbg.core :refer :all]
   [compojure.core :refer [defroutes routes GET POST]]
   [compojure.route :as route]
   [cuerdas.core :as str]
   [environ.core :refer [env]]
   [hugsql.core :as hugsql]
   [hugsql.adapter.clojure-java-jdbc :as cj-adapter]
   [org.httpkit.server :as kit]
   [taoensso.timbre :as log]
   [taoensso.timbre.appenders.3rd-party.rotor :as rotor]
   [ring.middleware.reload :as reload])
  (:gen-class))

(defroutes base-routes
  (route/resources "/")
  (route/not-found "<p>Page unfortunately not found.</p>"))

(def app (reload/wrap-reload
          (-> (routes base-routes))))
              
(defn init [args]
  (let [port (some-> args
                     (second)
                     (Integer/parseInt))
        port* (or port 4016)]

   (log/merge-config!
    {:level :info
     :appenders {:rotor (rotor/rotor-appender {:path "coponents.log"
                                               :max-size (* 512 1024)
                                               :backlog 10})}
     :ns-blacklist []
     :timestamp-opts {:locale (java.util.Locale/GERMAN)}})

   (kit/run-server #'app {:port port* :max-line (* 1024 16)})

   (hugsql/set-adapter! (cj-adapter/hugsql-adapter-clojure-java-jdbc))

   (log/info "Components started successfully on port" port*)))

(defn -main [& args]
  (init args))