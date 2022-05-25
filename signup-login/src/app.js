// Criando a Aplicação
const app = require("express")();
const bodyParser = require("body-parser");

// Variáveis de Ambiente
const env = require("dotenv").config().parsed;

// Parseando o JSON
app.use(bodyParser.json());

// Rotas
const userRouter = require("../routes/user");
app.use("/user", userRouter);

// Startup da Aplicação
const PORT = env.PORT ?? 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
