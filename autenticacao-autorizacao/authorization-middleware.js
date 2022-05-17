module.exports = (req, res, next) => {
  const authorization  = Boolean(req.cookies.AUTH_SYSTEM);
  
  if(authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
};
