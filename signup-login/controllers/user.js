const conn = require("../infra/connection");
const User = require("../dao/User")(conn);

exports.signup = (req, res) => {
  User.save(req.body, (err) => {
    if (err) {
      res.status(400).send({ message: "Failed to add user" })
    } else {
      res.status(201).send({ message: "User added successfully" })
    }
  });
}

exports.login = (req, res) => res.end("LOGIN 2.0");
