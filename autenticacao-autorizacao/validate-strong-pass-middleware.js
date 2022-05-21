// validateStrongPass
// Requisitos:
// Min: 1 letra maiuscula (65 à 90)
// Min: 1 letra minuscula (97 à 122)
// Min: 1 numero (48 à 57)
// Min: 1 caracter especial (32 à 47, 58 à 64, 91 à 96)
// DICA:
// console.log( "Secreta$123".split("") );
// console.log( "S".charCodeAt() );

module.exports = (req, res, next) => {
  const { pwd } = req.body;
  const MIN_RULES = 4;
  const validate = {};
  
  pwd.split("").forEach((letter) => { 
    const charCode = letter.charCodeAt();
    if(charCode >= 65 && charCode <= 90) validate.upperCase = true;
    if(charCode >= 97 && charCode <= 122) validate.lowerCase = true;
    if(charCode >= 48 && charCode <= 57) validate.number = true;
    if(charCode >= 32 && charCode <= 47) validate.specialChar = true;
    if(charCode >= 58 && charCode <= 64) validate.specialChar = true;
    if(charCode >= 91 && charCode <= 96) validate.specialChar = true;
  });

  // req.body.validate = validate;

  if(Object.keys(validate).length == MIN_RULES) {
    next();
  } else {
    res.sendStatus(403);
  }
}
