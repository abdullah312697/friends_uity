"use strict";

var jwt = require("jsonwebtoken");

var verifyToken = function verifyToken(req, res, next) {
  var authHeader = req.cookies.accessToken;

  if (authHeader) {
    jwt.verify(authHeader, process.env.ACC_TOKEN, function (err, user) {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated!");
  }
};

var verifyAndauth = function verifyAndauth(req, res, next) {
  verifyToken(req, res, function () {
    if (req.user.id === req.params.id && req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allowed to do this!");
    }
  });
};

var verifyAdmin = function verifyAdmin(req, res, next) {
  verifyToken(req, res, function () {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not a Admin!");
    }
  });
};

module.exports = {
  verifyToken: verifyToken,
  verifyAndauth: verifyAndauth,
  verifyAdmin: verifyAdmin
};