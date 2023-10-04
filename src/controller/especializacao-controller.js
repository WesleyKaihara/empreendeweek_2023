const { save,findMany } = require("../service/especializacao-service");

const listarEspecializacao = async(req,res) => {
  const listaDeEspecializacoes = await findMany();
  res.json(listaDeEspecializacoes);
}

const saveEspecializacao = async(req,res) => {
  const { nome } = req.body;

  const novaEspecializacao = await save(nome);
  res.json(novaEspecializacao);
}

module.exports = {
  saveEspecializacao,
  listarEspecializacao
}