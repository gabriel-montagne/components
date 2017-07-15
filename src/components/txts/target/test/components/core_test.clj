(ns components.core-test
  (:require [clojure.test :refer :all]
            [components.core :refer :all]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1))))

(with-test
  (defn add2 [x] 
    (+ x 2))
  (is (= 4 (add2 2)))
  (is (= 5 (add2 3))))
