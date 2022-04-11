"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _require = require('./varifyToken'),
    verifyToken = _require.verifyToken;

var router = require('express').Router();

var model = require('../models/Users'); //<update>


router.put("/update/:id", function _callee(req, res) {
  var newuser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
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
            profile: req.body.profile,
            nomineename: req.body.nomineename,
            nomineeFathername: req.body.nomineeFathername,
            nomineeMothername: req.body.nomineeMothername,
            relation: req.body.relation
          });
          _context.prev = 1;

          if (!(newuser.name === "" || newuser.mobile === "" || newuser.nidno === "" || newuser.fathername === "" || newuser.mothername === "" || newuser.villagename === "" || newuser.unionname === "" || newuser.postname === "" || newuser.district === "" || newuser.profile === "" || newuser.nomineename === "" || newuser.nomineeFathername === "" || newuser.nomineeMothername === "" || newuser.relation === "")) {
            _context.next = 6;
            break;
          }

          res.status(201).json("The field must not be empty!");
          _context.next = 9;
          break;

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(model.Users.findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 8:
          res.status(200).json("Update Success!");

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          res.status(500).json(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
}); //</update>
//<Delete>

router["delete"]("/delete/:id", function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(model.Users.findByIdAndDelete(req.params.id));

        case 3:
          res.status(200).json("User hasbeen Deleted!");
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); //</Delete>
//find unRegisterd user

router.get("/findRguser", function _callee3(req, res) {
  var unRdata;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(model.Users.find({
            registerd: false
          }));

        case 3:
          unRdata = _context3.sent;

          if (unRdata) {
            res.status(200).json(unRdata);
          }

          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //find unRegisterd user
//<FindOneUser>

router.get("/profile/:id", function _callee4(req, res) {
  var user, _user$_doc, password, re_password, Others;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(model.Users.findById(req.params.id));

        case 3:
          user = _context4.sent;
          _user$_doc = user._doc, password = _user$_doc.password, re_password = _user$_doc.re_password, Others = _objectWithoutProperties(_user$_doc, ["password", "re_password"]);
          res.status(200).json(Others);
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //</FindOneUser>
//<FindAllUser>

router.get("/gtAlluData", function _callee5(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(model.Users.find());

        case 3:
          users = _context5.sent;
          res.status(200).json(users);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json(_context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //</FindAllUser>
//<get monthlyData>

router.post("/phistory", verifyToken, function _callee6(req, res) {
  var fdata;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(model.Paydate.find({
            payForMonth: req.body.month,
            payForYear: req.body.year
          }));

        case 3:
          fdata = _context6.sent;

          if (fdata) {
            res.status(200).json(fdata);
          }

          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json(_context6.t0);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //</get monthlyData>
//<get pament History>

router.post("/getPhistory/:id", verifyToken, function _callee7(req, res) {
  var fdata;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;

          if (!(req.user.id === req.params.id)) {
            _context7.next = 8;
            break;
          }

          _context7.next = 4;
          return regeneratorRuntime.awrap(model.Paydate.find({
            payerId: req.params.id,
            payForYear: req.body.year
          }).sort({
            monthNumbr: 1
          }));

        case 4:
          fdata = _context7.sent;

          if (fdata) {
            res.status(200).json(fdata);
          }

          _context7.next = 9;
          break;

        case 8:
          res.status(202).json("your are not authenticated! ");

        case 9:
          _context7.next = 14;
          break;

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json(_context7.t0);

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); //</get pament History>
//monthly Instalment  By User

router.get("/confirmPayment", function _callee8(req, res) {
  var payData;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(model.Paydate.find({
            paymentSuccess: false
          }));

        case 3:
          payData = _context8.sent;

          if (payData) {
            res.status(200).json(payData);
          }

          _context8.next = 10;
          break;

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          res.status(500).json(_context8.t0);

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //monthly Instalment  By User
//Confirm Payment Monthly By Admin or Editor

router.put("/updatePay/:id", function _callee9(req, res) {
  var payData;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return regeneratorRuntime.awrap(model.Paydate.findByIdAndUpdate(req.params.id, {
            paymentSuccess: true
          }));

        case 3:
          payData = _context9.sent;

          if (payData) {
            res.status(200).json(payData);
          }

          _context9.next = 10;
          break;

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json(_context9.t0);

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Confirm Payment Monthly By Admin or Editor
//Show Our total Amount

router.get("/getAmout", function _callee10(req, res) {
  var payData;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap(model.Amount.findById("623c775e5a9760c2ca943e45"));

        case 3:
          payData = _context10.sent;

          if (payData) {
            res.status(200).json(payData);
          }

          _context10.next = 10;
          break;

        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          res.status(500).json(_context10.t0);

        case 10:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Show Our total Amount
//update total Amount

router.put("/updateAmout/:amount", function _callee11(req, res) {
  var payData;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return regeneratorRuntime.awrap(model.Amount.findByIdAndUpdate("623c775e5a9760c2ca943e45", {
            amount: req.params.amount
          }));

        case 3:
          payData = _context11.sent;

          if (payData) {
            res.status(200).json(payData);
          }

          _context11.next = 10;
          break;

        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          res.status(500).json(_context11.t0);

        case 10:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //update total Amount

module.exports = router;