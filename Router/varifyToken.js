const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.cookies.accessToken;

    if (authHeader) {
        jwt.verify(authHeader, process.env.ACC_TOKEN, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else {
        res.status(401).json("you are not authenticated!");
    }
};

const verifyAndauth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id && req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("you are not allowed to do this!");
        }
    });
};

const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {

        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("you are not a Admin!");
        }
    });
};

module.exports = { verifyToken, verifyAndauth, verifyAdmin, };