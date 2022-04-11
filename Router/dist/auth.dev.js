"use strict";

var router = require('express').Router();

var model = require('../models/Users');

var CryptoJS = require("crypto-js");

var jwt = require("jsonwebtoken");

var LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');
router.post('/rgone', function _callee(req, res) {
  var newuser, estr, saveuser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newuser = new model.Users({
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
            re_password: CryptoJS.AES.encrypt(req.body.re_password, process.env.PASS_SEC).toString()
          });
          _context.prev = 1;
          estr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!(newuser.email === "" || req.body.password === "" || req.body.re_password === "")) {
            _context.next = 7;
            break;
          }

          res.status(201).json("The field must not be empty!");
          _context.next = 30;
          break;

        case 7:
          if (newuser.email.match(estr)) {
            _context.next = 11;
            break;
          }

          res.status(201).json("Email is not valid!");
          _context.next = 30;
          break;

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(model.Users.findOne({
            email: newuser.email
          }).exec());

        case 13:
          if (!_context.sent) {
            _context.next = 17;
            break;
          }

          res.status(201).json("Email already exists!");
          _context.next = 30;
          break;

        case 17:
          if (!(req.body.password.length < 6)) {
            _context.next = 21;
            break;
          }

          res.status(201).json("Choose a password within 6 character!");
          _context.next = 30;
          break;

        case 21:
          if (!(req.body.password !== req.body.re_password)) {
            _context.next = 25;
            break;
          }

          res.status(201).json("Password not Match!");
          _context.next = 30;
          break;

        case 25:
          if (newuser.id) {
            localStorage.setItem("userId", newuser.id);
          }

          _context.next = 28;
          return regeneratorRuntime.awrap(newuser.save());

        case 28:
          saveuser = _context.sent;

          if (saveuser) {
            res.status(200).json("success");
          }

        case 30:
          _context.next = 35;
          break;

        case 32:
          _context.prev = 32;
          _context.t0 = _context["catch"](1);
          res.status(500).json(_context.t0);

        case 35:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 32]]);
});
router.put('/rgone', function _callee3(req, res) {
  var newuser, newData, estr, userId;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          newuser = new model.Users({
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
            re_password: CryptoJS.AES.encrypt(req.body.re_password, process.env.PASS_SEC).toString()
          });
          newData = {
            email: newuser.email,
            password: newuser.password,
            re_password: newuser.re_password
          };
          _context3.prev = 2;
          estr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (!(newuser.email === "" || req.body.password === "" || req.body.re_password === "")) {
            _context3.next = 8;
            break;
          }

          res.status(201).json("The field must not be empty!");
          _context3.next = 23;
          break;

        case 8:
          if (newuser.email.match(estr)) {
            _context3.next = 12;
            break;
          }

          res.status(201).json("Email is not valid!");
          _context3.next = 23;
          break;

        case 12:
          if (!(req.body.password.length < 6)) {
            _context3.next = 16;
            break;
          }

          res.status(201).json("Choose a password within 6 character!");
          _context3.next = 23;
          break;

        case 16:
          if (!(req.body.password !== req.body.re_password)) {
            _context3.next = 20;
            break;
          }

          res.status(201).json("Password not Match!");
          _context3.next = 23;
          break;

        case 20:
          userId = localStorage.getItem("userId");
          _context3.next = 23;
          return regeneratorRuntime.awrap(model.Users.findById(userId).exec().then(function _callee2(e) {
            return regeneratorRuntime.async(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(e.email === newuser.email)) {
                      _context2.next = 6;
                      break;
                    }

                    _context2.next = 3;
                    return regeneratorRuntime.awrap(model.Users.findByIdAndUpdate(userId, {
                      $set: newData
                    }, {
                      "new": true
                    }));

                  case 3:
                    res.status(200).json("successfull");
                    _context2.next = 16;
                    break;

                  case 6:
                    if (!(e.email !== newuser.email)) {
                      _context2.next = 16;
                      break;
                    }

                    _context2.next = 9;
                    return regeneratorRuntime.awrap(model.Users.findOne({
                      email: newuser.email
                    }).exec());

                  case 9:
                    if (!_context2.sent) {
                      _context2.next = 13;
                      break;
                    }

                    res.status(201).json("Email is already exec!");
                    _context2.next = 16;
                    break;

                  case 13:
                    _context2.next = 15;
                    return regeneratorRuntime.awrap(model.Users.findByIdAndUpdate(userId, {
                      $set: newData
                    }, {
                      "new": true
                    }));

                  case 15:
                    res.status(200).json("successfull");

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          }));

        case 23:
          _context3.next = 28;
          break;

        case 25:
          _context3.prev = 25;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json(_context3.t0);

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 25]]);
});
router.put('/rgtwo', function _callee4(req, res) {
  var newuser, userId, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          newuser = new model.Users({
            name: req.body.name,
            mobile: req.body.mobile,
            nidno: req.body.nidno,
            fathername: req.body.fathername,
            mothername: req.body.mothername,
            villagename: req.body.villagename,
            unionname: req.body.unionname,
            postname: req.body.postname,
            district: req.body.district,
            profile: req.body.profile
          });
          _context4.prev = 1;

          if (!(newuser.name === "" || newuser.mobile === "" || newuser.nidno === "" || newuser.fathername === "" || newuser.mothername === "" || newuser.villagename === "" || newuser.unionname === "" || newuser.postname === "" || newuser.district === "" || newuser.profile === "")) {
            _context4.next = 6;
            break;
          }

          res.status(201).json("The field must not be empty!");
          _context4.next = 11;
          break;

        case 6:
          userId = localStorage.getItem("userId");
          _context4.next = 9;
          return regeneratorRuntime.awrap(model.Users.findByIdAndUpdate(userId, {
            $set: req.body
          }, {
            "new": true
          }));

        case 9:
          result = _context4.sent;

          if (result) {
            res.status(200).json("successfull");
          }

        case 11:
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json(_context4.t0);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 13]]);
});
router.put('/rgthree', function _callee5(req, res) {
  var newuser, userId;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          newuser = new model.Users({
            nomineename: req.body.nomineename,
            nomineeFathername: req.body.nomineeFathername,
            nomineeMothername: req.body.nomineeMothername,
            relation: req.body.relation,
            registerd: req.body.registerd
          });
          _context5.prev = 1;

          if (!(newuser.nomineename === "" || newuser.nomineeFathername === "" || newuser.nomineeMothername === "" || newuser.relation === "")) {
            _context5.next = 6;
            break;
          }

          res.status(201).json("The field must not be empty!");
          _context5.next = 10;
          break;

        case 6:
          userId = localStorage.getItem("userId");
          _context5.next = 9;
          return regeneratorRuntime.awrap(model.Users.findByIdAndUpdate(userId, {
            $set: req.body
          }, {
            "new": true
          }));

        case 9:
          res.status(200).json("Registration Successful!");

        case 10:
          _context5.next = 15;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json(_context5.t0);

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 12]]);
});
router.post("/login", function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;

          if (!(req.body.email === "" || req.body.password === "")) {
            _context6.next = 5;
            break;
          }

          res.status(201).json("The field must not be empty!");
          _context6.next = 7;
          break;

        case 5:
          _context6.next = 7;
          return regeneratorRuntime.awrap(model.Users.findOne({
            email: req.body.email
          }).then(function (user) {
            if (!user) {
              res.status(201).json("Email or Password not Match!");
            } else if (user.registerd === false) {
              res.status(201).json("Registration is not complete!");
            } else {
              var Orgpassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
              var mainpass = Orgpassword.toString(CryptoJS.enc.Utf8);

              if (mainpass !== req.body.password) {
                res.status(201).json("Email or Password not Match!");
              } else {
                // const { password, ...Others } = user._doc;
                var accessToken = jwt.sign({
                  id: user._id,
                  isAdmin: user.isAdmin,
                  isEditor: user.isEditor,
                  profile: user.profile
                }, process.env.ACC_TOKEN, {
                  expiresIn: '3d'
                });
                res.status(200).cookie('accessToken', accessToken, {
                  sameSite: 'strict',
                  path: '/',
                  maxAge: 1647528321,
                  httpOnly: true,
                  secure: true
                }).json("successfull");
              }
            }
          }));

        case 7:
          _context6.next = 12;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json(_context6.t0);

        case 12:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
router.get("/vfyUser", function (req, res) {
  try {
    var getTkn = req.cookies.accessToken;
    jwt.verify(getTkn, process.env.ACC_TOKEN, function (err, user) {
      res.status(200).json(user);
    });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.get("/logOut", function (req, res) {
  try {
    var clCookie = res.clearCookie('accessToken');

    if (clCookie) {
      res.status(200).json("cookie is cleard");
    }
  } catch (e) {
    res.status(500).json(e);
  }
});
router.post("/addPayment", function _callee8(req, res) {
  var addYear;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          addYear = new model.Paydate({
            payerName: req.body.payerName,
            payerId: req.body.payerId,
            payOption: req.body.payOption,
            amount: req.body.amount,
            payForMonth: req.body.payForMonth,
            monthNumbr: req.body.monthNumbr,
            payForYear: req.body.payForYear,
            userProfile: req.body.userProfile
          });
          _context8.prev = 1;

          if (!(req.body.payerName === "" || req.body.amount === "" || req.body.payerId === "" || req.body.payOption === "" || req.body.payForMonth === "" || req.body.payForYear === "" || req.body.userProfile === "" || req.body.monthNumbr === "")) {
            _context8.next = 6;
            break;
          }

          res.status(202).json("The field must not be empty!");
          _context8.next = 8;
          break;

        case 6:
          _context8.next = 8;
          return regeneratorRuntime.awrap(model.Paydate.findOne({
            payerId: addYear.payerId,
            payForMonth: addYear.payForMonth,
            payForYear: addYear.payForYear
          }).then(function _callee7(d) {
            var checkSave;
            return regeneratorRuntime.async(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (d) {
                      _context7.next = 7;
                      break;
                    }

                    _context7.next = 3;
                    return regeneratorRuntime.awrap(addYear.save());

                  case 3:
                    checkSave = _context7.sent;

                    if (checkSave) {
                      res.status(200).json("payment successfull");
                    }

                    _context7.next = 8;
                    break;

                  case 7:
                    res.status(202).json("you are already pade!");

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            });
          }));

        case 8:
          _context8.next = 13;
          break;

        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          res.status(500).json(_context8.t0);

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 10]]);
});
module.exports = router;