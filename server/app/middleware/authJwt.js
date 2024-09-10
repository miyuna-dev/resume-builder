const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
	if (err instanceof TokenExpiredError) {
		return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
	}
	return res.sendStatus(401).send({ message: "Unauthorized!" });
}

const verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];
	if (!token) {
		return res.status(403).send({
			message: "No token provided!"
		});
	}
	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return catchError(err, res);
		}
		req.userId = decoded.id;
		next();
	});
};

const authJwt = {
	verifyToken: verifyToken,
};

module.exports = authJwt;