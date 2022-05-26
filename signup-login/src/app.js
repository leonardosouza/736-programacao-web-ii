// Criando a Aplicação
const app = require("express")();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Variáveis de Ambiente
const env = require("dotenv").config().parsed;

// Parseando o JSON
app.use(bodyParser.json());

// Parseando Cookies
app.use(cookieParser());

// Rotas
const userRouter = require("../routes/user");
app.use("/user", userRouter);

const appRouter = require("../routes/app");
app.use("/app", appRouter);

// Startup da Aplicação
const PORT = env.PORT ?? 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
