"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = require("firebase/app");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD_w9vSUKatBYv6e8saCgB_xmjpd-kCCI8",
  authDomain: "friendsunity-bda74.firebaseapp.com",
  projectId: "friendsunity-bda74",
  storageBucket: "friendsunity-bda74.appspot.com",
  messagingSenderId: "618286603329",
  appId: "1:618286603329:web:a394f6d13e76310c84fac0",
  measurementId: "G-BVLLC6XGJZ"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var _default = app;
exports["default"] = _default;