const { create,find, update, remove, updateStatus } = require("../service/atividade_usuario_service");

const listarAtividadesUsuario = async(req,res) => {
  const id = req.params.id;

  const atividades = await find(Number(id));
  res.json(atividades);;
}

const createAtividadeUsuario = async(req,res) => {
  const arquivo = req.arquivo;

  const novaAtividadeUsuario = await create(arquivo, req.body); 
  res.json(novaAtividadeUsuario);
}

const atualizarAtividadeUsuario = async(req,res) => {
  const arquivo = req.arquivo;
  const id = Number(req.params.id);

  const atividadeUsuarioAtualizada = await update(id, arquivo, req.body); 
  res.json(atividadeUsuarioAtualizada);
}

const atualizarStatus = async(req,res) => {
  const id = Number(req.params.id);

  await updateStatus(id, req.body);
  res.json({ message: "OK"});
}

const removerAtividadeUsuario = async(req,res) => {
  const id = Number(req.params.id);

  await remove(id);
  res.json({ message: `Atividade do Usuario removida com sucesso`})
}

module.exports = {
  createAtividadeUsuario,
  listarAtividadesUsuario,
  atualizarAtividadeUsuario,
  atualizarStatus,
  removerAtividadeUsuario
}
