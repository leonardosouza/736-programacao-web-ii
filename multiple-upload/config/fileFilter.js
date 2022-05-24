module.exports = (req, file, cb) => {
  const EXTENSIONS = require("./extensions");
  cb(null, (EXTENSIONS[file.mimetype]) ? true : false);
}
