import express from "express";
import fs from "fs";
require("dotenv").config();
const charactersContent = fs.readFileSync("./data/characters/characters.json");
const charactersBody = JSON.parse(charactersContent);
const filmsContent = fs.readFileSync("./data/films/films.json");
const filmsBody = JSON.parse(filmsContent);
const sagasContent = fs.readFileSync("./data/sagas/sagas.json");
const sagasBody = JSON.parse(sagasContent);

const app = express();
const port = process.env.PORT;
app.get("/characters", (req, res) => {
  res.send(charactersBody);
});
app.get("/films", (req, res) => {
  res.send(filmsBody);
});
app.get("/sagas", (req, res) => {
  res.send(sagasBody);
});
app.listen(port, () => {
  console.log(`port initiated ${port}`);
});
