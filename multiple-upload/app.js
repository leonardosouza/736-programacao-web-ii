const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const storage = require("./config/diskStorage")(multer);
const limits = require("./config/limits");
const fileFilter = require("./config/fileFilter");
const upload = multer({ storage, limits, fileFilter });

// config
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(express.static(path.resolve("public")));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/multiple-files.html"));
});

app.post("/upload/multiple", upload.array("files", 5), (req, res) => {
  console.log(req.files);
  res.render("photos", { photos: req.files });
});

// app.post("upload/multiple", (req, res) => {
// });

app.listen(5000, () => console.log('Up and running at port 5000...'));
