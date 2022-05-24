module.exports = (multer) => {
  // mapping
  const EXTENSIONS = require("./extensions");
  const ULID = require("ulid");

  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      console.log("=>", EXTENSIONS[file.mimetype] );
      cb(null, `${ULID.ulid()}.${EXTENSIONS[file.mimetype]}`);
    }
  });
};
