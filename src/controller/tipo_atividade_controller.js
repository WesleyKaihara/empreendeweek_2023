const { find, create, update, remove } = require("../service/tipo_atividade_service")


const listarTiposAtividade = async(req,res) => {
  const tiposAtividades = await find();
  res.json(tiposAtividades);
}

const criarTipoAtividade = async(req,res) => {
  const novoTipoAtividade = await create(req.body);
  res.json(novoTipoAtividade);
}

const atualizarTipoAtividade = async(req,res) => {
  const id = Number(req.params.id);

  const tipoAtividadeAtualizado = await update(id,req.body);
  res.json(tipoAtividadeAtualizado)
}

const removerTipoAtividade = async(req,res) => {
  const id = Number(req.params.id);

  await remove(id);
  res.json({ message: `Tipo de Atividade com ID: ${id} foi removido`});
}

module.exports = {
  listarTiposAtividade,
  criarTipoAtividade,
  atualizarTipoAtividade,
  removerTipoAtividade
}