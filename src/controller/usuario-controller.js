const { save } = require("../service/usuario-service");

const saveUsuario = async(req,res) => {
  const { nome } = req.body;

  const novoUsuario = await save(nome);
  res.json(novoUsuario);
}

module.exports = {
  saveUsuario,
}