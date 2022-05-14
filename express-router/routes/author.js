const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("Author with ID!");
});

router.put("/:id", (req, res) => {
  res.send("Author updated with ID!");
});

router.delete("/:id", (req, res) => {
  res.send("Author deleted with ID!");
});

module.exports = router;
