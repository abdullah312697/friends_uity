const router = require('express').Router();
const model = require('../models/Users');

//<update>
router.put("/update/:id", async(req, res) => {
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
        profile: req.body.profile,
        nomineename: req.body.nomineename,
        nomineeFathername: req.body.nomineeFathername,
        nomineeMothername: req.body.nomineeMothername,
        relation: req.body.relation,
    });

    try {
        if (newuser.name === "" || newuser.mobile === "" || newuser.nidno === "" || newuser.fathername ===
            "" || newuser.mothername === "" || newuser.villagename === "" ||
            newuser.unionname === "" || newuser.postname === "" || newuser.district === "" || newuser.profile === "" ||
            newuser.nomineename === "" || newuser.nomineeFathername ===
            "" || newuser.nomineeMothername === "" || newuser.relation === ""
        ) {
            res.status(201).json("The field must not be empty!");
        } else {
            await model.Users.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });

            res.status(200).json("Update Success!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//</update>


//<Delete>
router.delete("/delete/:id", async(req, res) => {

    try {
        await model.Users.findByIdAndDelete(req.params.id);
        res.status(200).json("User hasbeen Deleted!");
    } catch (err) {
        res.status(500).json(err);
    }

});
//</Delete>
//find unRegisterd user
router.get("/findRguser", async(req, res) => {
    try {
        const unRdata = await model.Users.find({ registerd: false });
        if (unRdata) {
            res.status(200).json(unRdata);
        }
    } catch (err) {
        res.status(500).json(err);
    }

});
//find unRegisterd user
//<FindOneUser>
router.get("/profile/:id", async(req, res) => {
    try {
        const user = await model.Users.findById(req.params.id);
        const { password, re_password, ...Others } = user._doc;
        res.status(200).json(Others);
    } catch (err) {
        res.status(500).json(err);
    }
});
//</FindOneUser>

//<FindAllUser>
router.get("/gtAlluData", async(req, res) => {
    try {
        const users = await model.Users.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});
//</FindAllUser>

//<get monthlyData>

router.post("/phistory", async(req, res) => {
    try {
        const fdata = await model.Paydate.find({ payForMonth: req.body.month, payForYear: req.body.year });

        if (fdata) {
            res.status(200).json(fdata);
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

//</get monthlyData>
//<get pament History>

router.post("/getPhistory/:id", async(req, res) => {

    try {

        if (req.user.id === req.params.id) {
            const fdata = await model.Paydate.find({ payerId: req.params.id, payForYear: req.body.year }).sort({ monthNumbr: 1 });

            if (fdata) {
                res.status(200).json(fdata);
            }
        } else {
            res.status(202).json("your are not authenticated! ");
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

//</get pament History>

//monthly Instalment  By User
router.get("/confirmPayment", async(req, res) => {
    try {
        const payData = await model.Paydate.find({ paymentSuccess: false });

        if (payData) {
            res.status(200).json(payData);
        }

    } catch (err) {
        res.status(500).json(err);
    }
});
//monthly Instalment  By User

//Confirm Payment Monthly By Admin or Editor
router.put("/updatePay/:id", async(req, res) => {
    try {
        const payData = await model.Paydate.findByIdAndUpdate(req.params.id, { paymentSuccess: true });

        if (payData) {
            res.status(200).json(payData);
        }

    } catch (err) {
        res.status(500).json(err);
    }

});
//Confirm Payment Monthly By Admin or Editor




//Show Our total Amount
router.get("/getAmout", async(req, res) => {
    try {
        const payData = await model.Amount.findById("623c775e5a9760c2ca943e45");
        if (payData) {
            res.status(200).json(payData);
        }

    } catch (err) {
        res.status(500).json(err);
    }

});

//Show Our total Amount

//update total Amount
router.put("/updateAmout/:amount", async(req, res) => {
    try {
        const payData = await model.Amount.findByIdAndUpdate("623c775e5a9760c2ca943e45", { amount: req.params.amount });

        if (payData) {
            res.status(200).json(payData);
        }

    } catch (err) {
        res.status(500).json(err);
    }

});


//update total Amount
module.exports = router;