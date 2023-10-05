const { create, findOne, update, remove } = require("../service/usuario-service");

const createUsuario = async(req,res) => {

  const novoUsuario = await create(req.body);
  res.json(novoUsuario);
}

const encontrarUsuario = async(req,res) => {
  const id = Number(req.params.id);

  const usuario = await findOne(id);
  res.json(usuario);
}

const atualizarUsuario = async(req,res) => {
  const id = Number(req.params.id);

  const usuarioAtualizado = await update(id, req.body);
}

const removerUsuario = async(req,res) => {
  const id = Number(req.params.id);

  await remove(id);
  res.json({ message: `Usuario com ID: ${id} foi removido`});
}

module.exports = {
  createUsuario,
  encontrarUsuario,
  atualizarUsuario,
  removerUsuario
}