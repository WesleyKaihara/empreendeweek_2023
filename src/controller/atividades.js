const { find, save } = require('../service/atividades');

const listarAtividades = async(req,res) => {
  const atividades = await find();
  res.json(atividades);
}

const saveAtividade = async(req,res) => {
  const novaAtividade = await save(req.body);
  res.json();
}

module.exports = {
  listarAtividades,
  saveAtividade
}