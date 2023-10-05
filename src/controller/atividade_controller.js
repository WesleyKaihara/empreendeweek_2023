const { find, update, remove, create } = require('../service/atividade_service');

const listarAtividades = async(req,res) => {
  const usuarioFiltro = req.query.usuario;

  const atividades = await find(usuarioFiltro);
  res.json(atividades);
}

const criarAtividade = async(req,res) => {
  const novaAtividade = await create(req.body);
  res.json(novaAtividade);
}

const atualizarAtividade = async(req,res) => {
  const id = Number(req.params.id);

  const atividadeAtualizada = await update(id,req.body)
  res.json(atividadeAtualizada);
}

const removerAtividade = async(req,res) => {
  const id = Number(req.params.id);

  await remove(id);
  res.json({ message: `Atividade com o Id: ${id} foi removida`})
}

module.exports = {
  listarAtividades,
  criarAtividade,
  atualizarAtividade,
  removerAtividade
}