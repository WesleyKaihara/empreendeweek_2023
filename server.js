require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const PORT = process.env.PORT;

const atividadeRotas = require("./src/routes/atividade-usuario");
const especializacaoRotas = require("./src/routes/especializacao");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(atividadeRotas);
app.use(especializacaoRotas);
app.use(cors());

app.get("/", (req,res) => {
  res.send("Hey!!")
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
