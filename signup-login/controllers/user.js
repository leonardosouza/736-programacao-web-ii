const conn = require("../infra/connection");
const User = require("../dao/User")(conn);
const jwt = require("jsonwebtoken");
const env = require("dotenv").config().parsed;

exports.signup = (req, res) => {
  User.save(req.body, (err) => {
    if (err) {
      res.status(400).send({ message: "Failed to add user" })
    } else {
      res.status(201).send({ message: "User added successfully" })
    }
  });
}

exports.login = (req, res) => {
  User.findOne(req.body, (err, user, isValid) => {
    if(user.length && isValid) {
      const { id, name } = user[0];
      const accessToken = jwt.sign({ id, name }, env.PRIVATE_KEY, { expiresIn: env.EXPIRES_IN });
      res
        .cookie("access_token", accessToken, { httpOnly: true, secure: false })
        .status(200)
        .json({ message: "Logged in successfully" });

    } else if(user.length && !isValid) {
      res
        .clearCookie("access_token")
        .status(400)
        .json({ message: "Wrong password" });

    } else {
      res
        .clearCookie("access_token")
        .status(404)
        .json({ message: "User not found" });
    }
  });
}
