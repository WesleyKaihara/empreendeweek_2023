const { save,find } = require("../service/atividade-usuario.service");

const listarAtividadesUsuario = async(req,res) => {
  const id = req.params.id;

  const atividades = await find(Number(id));
  res.json(atividades);;
}

const saveAtividadeUsuario = async(req,res) => {
  const arquivo = req.arquivo;

  const novaAtividade = await save(arquivo, req.body); 
  res.send(novaAtividade);
}

module.exports = {
  saveAtividadeUsuario,
  listarAtividadesUsuario
}