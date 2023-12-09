import "./loadEnv.js";

import express from "express";

import "./loadEnv.js";
import db from "./database/connection.js";
//import validateData from "./utils/validateData.js";

const port = process.env.PORT;

var app = express();

app.use(express.json());

app.get(["/", "/lancamentos"], async (req, res) => {
  let collection = db.collection("lancamentos");
  try {
    let results = await collection.find({}).limit(50).toArray();
    res.send(results).status(200);
  } catch (e) {
    console.log(e);
    res.send("Erro!").status(500);
  }
});

app.get("/lancamento/:id", async (req, res) => {
  let collection = db.collection("lancamentos");
  const { id } = req.params;

  const query = { idLancamento: Number(id) };
  try {
    let result = await collection.findOne(query);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send("Erro!");
  }
});

app.post("/lancamento", async (req, res) => {
  const data = req.body;

  //if(!validateData(data)){
  //  return res.status(400).send("Formato inválido!");
  //}

  let collection = db.collection("lancamentos");
  try {
    let result = await collection.insertOne(data);
    res.status(201).send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send("Erro!");
  }
});

app.delete("/lancamento/:id", async (req, res) => {
  let collection = db.collection("lancamentos");
  const { id } = req.params;
  const query = { idLancamento: id };
  try {
    let result = await collection.deleteOne(query);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send("Erro!");
  }
});

app.listen(port, function () {
  console.log("Started application on port %d", port);
});
