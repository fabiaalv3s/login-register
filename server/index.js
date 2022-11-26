const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "9WidxTm7",
  database: "banco2",
});

app.get("/", (_req, _res) => {
  db.query(
    "INSERT INTO usuario (email, password)VALUES ('fabia@hotmail.com', '1234567')"  
  );
})

app.use(express.json());

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
