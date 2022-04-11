"use strict";

var mongoose = require("mongoose");

var UserScema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  re_password: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    "default": false
  },
  isEditor: {
    type: Boolean,
    "default": false
  },
  name: {
    type: String
  },
  mobile: {
    type: Number
  },
  nidno: {
    type: Number
  },
  fathername: {
    type: String
  },
  mothername: {
    type: String
  },
  postname: {
    type: String
  },
  district: {
    type: String
  },
  unionname: {
    type: String
  },
  villagename: {
    type: String
  },
  profile: {
    type: String
  },
  imgName: {
    type: String
  },
  nomineename: {
    type: String
  },
  nomineeFathername: {
    type: String
  },
  nomineeMothername: {
    type: String
  },
  relation: {
    type: String
  },
  registerd: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var Payment = new mongoose.Schema({
  payerName: {
    type: String
  },
  payerId: {
    type: String
  },
  payOption: {
    type: String
  },
  amount: {
    type: Number
  },
  payForMonth: {
    type: String
  },
  monthNumbr: {
    type: Number
  },
  payForYear: {
    type: Number
  },
  userProfile: {
    type: String
  },
  paymentSuccess: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
var AmountScema = new mongoose.Schema({
  amount: {
    type: Number
  }
}, {
  timestamps: true
});
var Users = mongoose.model("Users", UserScema);
var Paydate = mongoose.model("Paydate", Payment);
var Amount = mongoose.model("Amount", AmountScema);
module.exports = {
  Users: Users,
  Paydate: Paydate,
  Amount: Amount
};