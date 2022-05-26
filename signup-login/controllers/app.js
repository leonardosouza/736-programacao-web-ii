
exports.restricted = (req, res) => {
  res.json({ message: "Restricted!!!" });
}

exports.protected = (req, res) => {
  res.json({ message: "Protected!!!" });
}
