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

  findOne(data, callback) {
    const { email, password } = data;
    const sql = `SELECT id, name, email, hash, salt FROM users WHERE email = '${email}';`;

    this.conn.all(sql, (err, rows) => {
      if(rows.length) {
        const { salt, hash } = rows[0];
        const hashPwd = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        const passwordIsValid = hash === hashPwd;
        callback(err, rows, passwordIsValid);
      } else {
        callback(err, rows, null);
      }
    });
  }

}

module.exports = (conn) => new User(conn);


