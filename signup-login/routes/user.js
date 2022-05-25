const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// Cadastro de Usuários
router.post("/signup", userController.signup);

// Autenticação de Usuários
router.post("/login", userController.login);

module.exports = router;
