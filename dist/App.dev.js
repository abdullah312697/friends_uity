"use strict";

var express = require('express');

var cookieParser = require('cookie-parser');

var cors = require('cors');

var mongo = require('mongoose');

var dotenv = require('dotenv');

var userRouter = require('./Router/user');

var authRouter = require('./Router/auth');

var webpush = require("web-push");

var app = express();
var vapKeys = {
  publicKey: 'BKTxawDh9TY6sx9gOOLIEZ1-rYjucYbKGY2Q9RGzGPUK0iWG_iSqo82qaKbp4KaHvCa61eQkwUIA-gMeY109dQg',
  privateKey: 'cd5u8i12i7VZzMnGheLBiUyWy7ODqQefUQ9LjYqE3ew'
};
webpush.setVapidDetails("mailto:kamil.ksa25@gmail.com", vapKeys.publicKey, vapKeys.privateKey); // let sub = {};
// webpush.sendNotification(sub, 'test message');

dotenv.config();
var port = process.env.PORT || 5000;
mongo.connect(process.env.MONGO_URL).then(function () {
  console.log('database connected successfully');
})["catch"](function (err) {
  console.log(err);
});
app.use(cors({
  "origin": "http://localhost:3000",
  "credentials": true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.listen(port, function () {
  console.log("Your App is running on http://localhost:".concat(port));
});