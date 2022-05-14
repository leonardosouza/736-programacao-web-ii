const express = require("express");
const router = express.Router();

// Sintaxe
// router.get("/", callback1, callback2, callback3);

const dest = {
  SPO: "São Paulo",
  TXF: "Teixeira de Freitas",
  PTS: "Porto Seguro",
  ALG: "Alagoas",
  RIO: "Rio de Janeiro"
};

router.get("/:from/:to", (req, res) => {
  console.log("Params:", req.params);
  const { fromFullDest, toFullDest, from, to } = req.params;
  res.send(`Onibus partindo de ${from} (${fromFullDest}) para ${to} (${toFullDest})`);
});

router.param('from', (req, res, next) => {
  console.log("Tratando from:", req.params);
  req.params.fromFullDest = dest[req.params.from];
  next();
});

router.param('to', (req, res, next) => {
  console.log("Tratando to:", req.params);
  req.params.toFullDest = dest[req.params.to];
  next();
});

module.exports = router;
