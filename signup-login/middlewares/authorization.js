const jwt = require("jsonwebtoken");
const env = require("dotenv").config().parsed;

module.exports = (req, res, next) => {
  const accessToken = req.cookies.access_token;
  if(!accessToken) res.sendStatus(403);

  try {
    jwt.verify(accessToken, env.PRIVATE_KEY);
    next();
  } catch (error) {
    res.sendStatus(403);
  }
}
