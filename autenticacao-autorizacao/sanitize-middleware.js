module.exports = (req, res, next) => {
  const { usr } = req.body;
  req.body.usr = usr.replace( /(\.|\-|\_)/g, "" );
  next();
}
