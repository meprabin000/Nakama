const express = require("express");
const currency = require('./currency');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Hello !");
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use('/currency', currency.convert);

module.exports = app;
