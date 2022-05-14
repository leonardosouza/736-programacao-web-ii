const app = require("express")();

// Routes
const book = require("../routes/book");
app.use('/book', book);

const author = require("../routes/author");
app.use('/author', author);

const flight = require("../routes/flight");
app.use('/flight', flight);

const bus = require("../routes/bus");
app.use('/bus', bus);

app.listen(8080, console.log(`Server running at port 8080`));
