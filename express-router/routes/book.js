const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Books Page!");
});

router.get("/:id", (req, res) => {
  res.send("Books With ID!");
});

router.get("/:id/author", (req, res) => {
  res.send("Authors Page!");
});

module.exports = router;
