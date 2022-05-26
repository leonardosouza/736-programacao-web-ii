const express = require("express");
const router = express.Router();
const appController = require("../controllers/app");
const authorization = require("../middlewares/authorization");

router.post("/restricted", authorization, appController.restricted);

router.post("/protected", authorization, appController.protected);

module.exports = router;
