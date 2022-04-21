var router = require('express').Router();
const model = require('../models/Users');
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
var LocalStorage = require('node-localstorage').LocalStorage;

localStorage = new LocalStorage('./scratch');

router.post('/rgone', async(req, res) => {

    const newuser = new model.Users({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        re_password: CryptoJS.AES.encrypt(req.body.re_password, process.env.PASS_SEC).toString(),
    });
    try {
        var estr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (newuser.email === "" || req.body.password === "" || req.body.re_password === "") {
            res.status(201).json("The field must not be empty!");
        } else if (!newuser.email.match(estr)) {
            res.status(201).json("Email is not valid!");
        } else if (await model.Users.findOne({ email: newuser.email }).exec()) {
            res.status(201).json("Email already exists!");
        } else if (req.body.password.length < 6) {
            res.status(201).json("Choose a password within 6 character!");
        } else if (req.body.password !== req.body.re_password) {
            res.status(201).json("Password not Match!");
        } else {
            if (newuser.id) {
                localStorage.setItem("userId", newuser.id);
            }
            const saveuser = await newuser.save();
            if (saveuser) {
                res.status(200).json("success");
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/rgone', async(req, res) => {

    const newuser = new model.Users({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        re_password: CryptoJS.AES.encrypt(req.body.re_password, process.env.PASS_SEC).toString(),
    });

    const newData = {
        email: newuser.email,
        password: newuser.password,
        re_password: newuser.re_password
    };

    try {
        var estr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (newuser.email === "" || req.body.password === "" || req.body.re_password === "") {
            res.status(201).json("The field must not be empty!");
        } else if (!newuser.email.match(estr)) {
            res.status(201).json("Email is not valid!");
        } else if (req.body.password.length < 6) {
            res.status(201).json("Choose a password within 6 character!");
        } else if (req.body.password !== req.body.re_password) {
            res.status(201).json("Password not Match!");
        } else {
            const userId = localStorage.getItem("userId");
            await model.Users.findById(userId).exec().then(async(e) => {
                if (e.email === newuser.email) {
                    await model.Users.findByIdAndUpdate(userId, { $set: newData }, { new: true });
                    res.status(200).json("successfull");
                } else if (e.email !== newuser.email) {
                    if (await model.Users.findOne({ email: newuser.email }).exec()) {
                        res.status(201).json("Email is already exec!");
                    } else {
                        await model.Users.findByIdAndUpdate(userId, { $set: newData }, { new: true });
                        res.status(200).json("successfull");
                    }
                }

            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/rgtwo', async(req, res) => {

    const newuser = new model.Users({
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

    try {

        if (newuser.name === "" || newuser.mobile === "" || newuser.nidno === "" || newuser.fathername ===
            "" || newuser.mothername === "" || newuser.villagename === "" ||
            newuser.unionname === "" || newuser.postname === "" || newuser.district === "" || newuser.profile === "") {
            res.status(201).json("The field must not be empty!");
        } else {
            const userId = localStorage.getItem("userId");
            const result = await model.Users.findByIdAndUpdate(userId, { $set: req.body }, { new: true });
            if (result) { res.status(200).json("successfull"); }

        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/rgthree', async(req, res) => {

    const newuser = new model.Users({
        nomineename: req.body.nomineename,
        nomineeFathername: req.body.nomineeFathername,
        nomineeMothername: req.body.nomineeMothername,
        relation: req.body.relation,
        registerd: req.body.registerd
    });


    try {
        if (newuser.nomineename === "" || newuser.nomineeFathername ===
            "" || newuser.nomineeMothername === "" || newuser.relation === "") {
            res.status(201).json("The field must not be empty!");
        } else {
            const userId = localStorage.getItem("userId");
            await model.Users.findByIdAndUpdate(userId, { $set: req.body }, { new: true });
            res.status(200).json("Registration Successful!");
        }

    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/login", async(req, res) => {
    try {

        if (req.body.email === "" || req.body.password === "") {
            res.status(201).json("The field must not be empty!");
        } else {
            await model.Users.findOne({ email: req.body.email }).then(user => {
                if (!user) {
                    res.status(201).json("Email or Password not Match!");
                } else if (user.registerd === false) {
                    res.status(201).json("Registration is not complete!");
                } else {
                    const Orgpassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
                    const mainpass = Orgpassword.toString(CryptoJS.enc.Utf8);
                    if (mainpass !== req.body.password) {
                        res.status(201).json("Email or Password not Match!");
                    } else {
                        // const { password, ...Others } = user._doc;

                        const accessToken = jwt.sign({
                                id: user._id,
                                isAdmin: user.isAdmin,
                                isEditor: user.isEditor,
                                profile: user.profile,
                            },
                            process.env.ACC_TOKEN,

                            { expiresIn: '3d' }

                        );
                        res.status(200).cookie('accessToken', accessToken,

                            {
                                sameSite: 'none',
                                path: '/',
                                maxAge: 1647528321,
                                httpOnly: true,
                                secure: true
                            }

                        ).json("successfull");

                    }
                }
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/vfyUser", (req, res) => {
    try {
        const getTkn = req.cookies.accessToken;
        jwt.verify(getTkn, process.env.ACC_TOKEN, (err, user) => {
            res.status(200).json(user);
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get("/logOut", (req, res) => {
    try {
        const clCookie = res.clearCookie('accessToken');
        if (clCookie) {
            res.status(200).json("cookie is cleard");
        }
    } catch (e) {
        res.status(500).json(e);
    }
});


router.post("/addPayment", async(req, res) => {

    const addYear = new model.Paydate({
        payerName: req.body.payerName,
        payerId: req.body.payerId,
        payOption: req.body.payOption,
        amount: req.body.amount,
        payForMonth: req.body.payForMonth,
        monthNumbr: req.body.monthNumbr,
        payForYear: req.body.payForYear,
        userProfile: req.body.userProfile,
    });
    try {
        if (
            req.body.payerName === "" || req.body.amount === "" ||
            req.body.payerId === "" || req.body.payOption === "" ||
            req.body.payForMonth === "" || req.body.payForYear === "" ||
            req.body.userProfile === "" || req.body.monthNumbr === ""

        ) {
            res.status(202).json("The field must not be empty!");
        } else {
            await model.Paydate.findOne({
                payerId: addYear.payerId,
                payForMonth: addYear.payForMonth,
                payForYear: addYear.payForYear
            }).then(async(d) => {
                if (!d) {
                    const checkSave = await addYear.save();
                    if (checkSave) {
                        res.status(200).json("payment successfull");
                    }

                } else {
                    res.status(202).json("you are already pade!");
                }
            });
        }
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;