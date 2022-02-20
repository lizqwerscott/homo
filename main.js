//const homo = require("./homo.js")
import homo from './homo.js';
import express from "express";

let app = express()

app.get("/homo", function(req, res) {
  console.log(req.query.number)
  res.send(homo(Number(req.query.number)))
})

app.listen(1145, "0.0.0.0")

let result = homo("⑨")
console.log(result)

