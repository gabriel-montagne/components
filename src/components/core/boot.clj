(ns components.core.boot
  (:require
   [ak-dbg.core :refer :all]
   [compojure.core :refer [defroutes routes GET POST]]
   [compojure.route :as route]
   [components.ctrl.index :refer [index-routes]]
   [components.ctrl.middleware :as c-mid]
   [components.ctrl.template :refer [template-routes]]
   [components.ctrl.account :refer [account-routes]]
   [components.ctrl.token :refer [token-routes]]
   [components.ctrl.chat :refer [chat-routes]]
   [components.ctrl.smtp :refer [smtp-routes]]
   [cuerdas.core :as str]
   [environ.core :refer [env]]
   [hugsql.core :as hugsql]
   [hugsql.adapter.clojure-java-jdbc :as cj-adapter]
   [org.httpkit.server :as kit]
   [taoensso.timbre :as log]
   [taoensso.timbre.appenders.3rd-party.rotor :as rotor]
   [ring.middleware.reload :as reload])
  (:gen-class))

(require 'components.tmpl.account.account)
(require 'components.tmpl.home.home)
(require 'components.tmpl.chat.chat)

(defroutes base-routes
  (route/resources "/")
  (route/not-found "<p>Page unfortunately not found.</p>"))

(def app (reload/wrap-reload
          (-> (routes index-routes template-routes chat-routes smtp-routes account-routes token-routes base-routes)
              (c-mid/middleware))))
              
(defn init [args]
  (let [port (some-> args
                     (second)
                     (Integer/parseInt))
        port* (or port 4016)]

   (log/merge-config!
    {:level :info
     :appenders {:rotor (rotor/rotor-appender {:path "components.log"
                                               :max-size (* 512 1024)
                                               :backlog 10})}
     :ns-blacklist []
     :timestamp-opts {:locale (java.util.Locale/ENGLISH)}})

   (kit/run-server #'app {:port port* :max-line (* 1024 16)})

   (hugsql/set-adapter! (cj-adapter/hugsql-adapter-clojure-java-jdbc))

   (log/info "Components started successfully on port" port*)))

(defn -main [& args]
  (init args))
