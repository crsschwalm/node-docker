const express = require("express");
var path = require("path");
const app = express();
const port = 8080;

app
  .get("/", (req, res) =>
    res.sendFile(path.join(__dirname + "/static/home.html"))
  )
  .get("/hello", (req, res) => res.send("Hello Friend!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
