require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

const PORT = process.env.PORT;

const tiposAtividadeRotas = require("./src/routes/tipo_atividade");
const atividadeRotas = require("./src/routes/atividade_usuario");
const especializacaoRotas = require("./src/routes/especializacao");
const atividadeUsuarioRotas = require("./src/routes/atividade");
const usuarioRotas = require("./src/routes/usuario");
const arquivosRotas = require("./src/routes/arquivo");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(tiposAtividadeRotas);
app.use(atividadeRotas);
app.use(especializacaoRotas);
app.use(usuarioRotas);
app.use(atividadeUsuarioRotas);
app.use(arquivosRotas);

app.get("/", (req,res) => {
  res.send("Hey!!")
});

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
