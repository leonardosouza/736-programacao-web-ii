const app = require("express")();
const path = require("path");
// const upload = require("multer")({ dest: "uploads" });

const multer = require("multer");

// config do upload
// storage => lugar onde vou armazenar
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    // console.log( Date.now() );
    // console.log( file.originalname, /\.[A-z]{3,4}$/.exec(file.originalname) );
    // console.log( file.originalname, file.originalname.match(/\.[A-z]{3,4}$/) );
    const fileName = Date.now();
    const ext = file.originalname.match(/\.[A-z]{3,4}$/)[0];
    cb(null, `${fileName}${ext}`);
  }
});

// limits => define o limite de tamanho para envio do arquivo
const limits = {
  fileSize: 1024 * 1024
};

// fileFilter => define regras para filtrar os arquivos
const fileFilter = (req, file, cb) => {
  console.log(file);
  if(['image/png', 'image/jpeg', 'image/webp'].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new Error('Type of file is invalid!'));
  }
};

const uploadSingle = multer({ storage, limits, fileFilter }).single("single");

// routes
// app.post("/upload/single", upload.single("single"), (req, res) => {
//   console.log(req.file);
//   res.redirect(`/upload/${ (req.file.size != 0) ? "success" : "error" }`);
// });

app.post("/upload/single", (req, res) => {
  
  uploadSingle(req, res, (err) => {
    console.log("ERR:", err);
    if(err) {
      res.redirect(`/upload/error?reason=${err.code}`);
    } else {
      res.redirect("/upload/success");
    }
  });

});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/single.html"));
});

app.get("/upload/success", (req, res) => {
  res.sendFile(path.resolve("public/success.html"));
});

app.get("/upload/error", (req, res) => {
  res.sendFile(path.resolve("public/error.html"));
});

app.listen(3000, () => console.log("Server up and running!"));
