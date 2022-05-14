const express = require("express");
const router = express.Router();

// Sintaxe
// router.get("/", callback1, callback2, callback3);

const dest = {
  SPO: "São Paulo",
  TXF: "Teixeira de Freitas",
  PTS: "Porto Seguro",
  ALG: "Alagoas"
};

// dest.SPO; // São Paulo
// dest["SPO"]; // São Paulo

const getDestination = (req, res, next) => {
  const { from, to } = req.params; // SPO TXF
  req.params.from = dest[from];
  req.params.to = dest[to];
  next();
};

const getFlyInfo = (req, res, next) => {
  const { from, to } = req.params; // São Paulo Texeira de Freitas
  req.params.info = `Voo partindo de ${from} até ${to}!`;
  next();
};

const getFlyHour = (req, res) => {
  console.log(req.params);
  res.send(`${req.params.info} \n ${new Date()}`);
};

router.get("/:from/:to", getDestination, getFlyInfo, getFlyHour);

module.exports = router;
