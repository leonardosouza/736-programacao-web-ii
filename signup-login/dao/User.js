const ULID = require("ulid");
const crypto = require("crypto");

class User {
  constructor(conn) {
    this.conn = conn;
  }

  save(data, callback) {
    const { name, email, password } = data;
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    const sql = `INSERT INTO users (id, name, email, hash, salt) VALUES ('${ULID.ulid()}', '${name}', '${email}', '${hash}', '${salt}');`;
    this.conn.run(sql, callback);
  }
}

module.exports = (conn) => new User(conn);


