const app = require("express")();
const env = require("dotenv").config().parsed;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authorization = require("./authorization-middleware"); 
const sanitizeCPF = require("./sanitize-middleware");
const validateStrongPass = require("./validate-strong-pass-middleware");

// activing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); 

// routes (authentication)
app.post('/login', sanitizeCPF, validateStrongPass, (req, res) => {
  const { USER, PWD } = env; // system
  const { usr, pwd } = req.body; // user
  const auth = (USER === usr && PWD === pwd);

  res
    .cookie("AUTH_SYSTEM", auth || "")
    .status((auth) ? 200 : 404 )
    .json({ 
      message: (auth) ? "Authenticated": "Not Authenticated" 
    });
});

app.post('/logout', (req, res) => {
  res
    .clearCookie("AUTH_SYSTEM")
    .status(200)
    .json({ message: "Not Authenticated" });
});


// routes (authorization)
app.post('/protected', authorization, (req, res) => {
    res
      .status(200)
      .json({ route: req.path, authorized: true })
});

app.post('/private', authorization, (req, res) => {
  res
      .status(200)
      .json({ route: req.path, authorized: true });
});

const PORT = env.PORT ?? 8000;
app.listen(PORT, () => console.log(`Up and running at: http://localhost:${PORT}`));
