const { create,find, update, remove } = require("../service/especializacao_service");

const listarEspecializacoes = async(req,res) => {
  const listaDeEspecializacoes = await find();
  res.json(listaDeEspecializacoes);
}

const criarEspecializacao = async(req,res) => {
  const { nome } = req.body;

  const novaEspecializacao = await create(nome);
  res.json(novaEspecializacao);
}

const atualizarEspecializacao = async(req,res) => {
  const id = Number(req.params.id);

  const especializacaoAtualizada = await update(id, req.body)
  res.json(especializacaoAtualizada);
}

const removerEspecializacao = async(req,res) => {
  const id = Number(req.params.id); 

  await remove(id);
  res.json({ mensage: `Especialização com ID: ${id} foi removida`});
}

module.exports = {
  listarEspecializacoes,
  criarEspecializacao,
  atualizarEspecializacao,
  removerEspecializacao
}