// Importando o Express e Criando Aplicação
const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser());

// Mapeando as Rotas
// app.METHOD("route", callback);
// METHOD => GET / POST / PUT / PATCH / DELETE

// Rota (Catch All)
// Atende todos os métodos do HTTP (GET / POST / PUT / PATCH / DELETE)
app.all("/books", (req, res, next) => {
  console.time("elapsed_time");
  console.log("Books Requested!");
  console.log("HTTP METHOD:", req.method);
  console.log("\n");
  next();
});

// Rota Básicas
// req - Incoming Message
// res - Server Response
app.get("/books", (req, res) => {
  // Query Parameters - Desejavel / Opcional
  console.log("QUERY PARAM:", req.query);

  // Body Request - Opcional
  console.log("BODY REQUEST:", req.body);

  // Path Params - Desejavel / Opcional
  console.log("PATH PARAM:", req.params);

  res.end(`RESPONSE GET: ${req.query.id ?? 0} | ${req.query.rotate ?? false}`);

  console.timeEnd("elapsed_time");
});

app.post("/books", (req, res) => {
  // Query Parameters - Opcional
  console.log("QUERY PARAM:", req.query);

  // Body Request - Obrigatório
  console.log("BODY REQUEST:", req.body);

  // Path Params - Opcional
  console.log("PATH PARAM:", req.params);

  res.end(`RESPONSE POST: ${req.body.book} | ${req.body.firstName} ${req.body.lastName}`);

  console.timeEnd("elapsed_time");
});

app.put("/books/:isbn", (req, res) => {
  // Query Parameters - Opcional
  console.log("QUERY PARAM:", req.query);

  // Body Request - Obrigatório
  console.log("BODY REQUEST:", req.body);

  // Path Params - Obrigatório
  console.log("PATH PARAM:", req.params);

  res.end(`RESPONSE PUT: ${req.body.book} - ${req.params.isbn} by ${req.body.firstName} ${req.body.lastName}`);
});

app.delete("/books/:isbn", (req, res) => {
  // Query Parameters - Opcional
  console.log("QUERY PARAM:", req.query);

  // Body Request - Opcional
  console.log("BODY REQUEST:", req.body);

  // Path Params - Obrigatório
  console.log("PATH PARAM:", req.params);

  res.end(`RESPONSE DELETE: ${req.params.isbn}`);
});

// Rotas Avançadas
// Conjunto Caracteres: ? + * () |

const advancedHandler = (req, res) => {
  console.log("ROUTE:", req.url);
  res.end(`END: ${req.url}`);
};

// ? Opcional
app.get("/pages?", advancedHandler);

// + Repetidor 
app.get("/ses+ion", advancedHandler);

// * Tudo
app.get("/auth*", advancedHandler);

// () Agrupador
// | Ou
app.get("/den(y|ied)", advancedHandler);

// Regular Expression (Regex)
app.get(/(server|client)-?side/, advancedHandler);

// $ Fim da Linha
app.get(/(front|back)end$/, advancedHandler);

// Iniciando o Servidor de Aplicação
app.listen(5000, () => console.log(`Server running on port 5000`));
