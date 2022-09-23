const express = require("express");
const currency = require('./currency');

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello !");
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use('/currency', currency.convert);

module.exports = app;
