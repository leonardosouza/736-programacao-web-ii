const path = require("path");
const sqlite = require("sqlite3");
const env = require("dotenv").config().parsed;

module.exports = new sqlite.Database(path.resolve(env.DATABASE_PATH));
