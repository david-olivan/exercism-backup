(defpackage :lillys-lasagna
  (:use :cl)
  (:export :expected-time-in-oven
           :remaining-minutes-in-oven
           :preparation-time-in-minutes
           :elapsed-time-in-minutes))

(in-package :lillys-lasagna)

;; Define function expected-time-in-oven
(defun expected-time-in-oven () "The minutes in the oven" (+ 336 1))

;; Define function remaining-minutes-in-oven
(defun remaining-minutes-in-oven (min) "Current minutes in oven minus total minutes required" (- (expected-time-in-oven) min))

;; Define function preparation-time-in-minutes
(defun preparation-time-in-minutes (layers) "Each layer takes 19 minutes to get ready" (* layers 19))

;; Define function elapsed-time-in-minutes
(defun elapsed-time-in-minutes (layers min) "Layers times minutes and then added to total time in oven" (+ (preparation-time-in-minutes layers) min))
