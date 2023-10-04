const DB = require("../../prisma/prisma");

const find = async(id) => {
  const atividades = await DB.usuario_atividade.findMany({
    where: {
      id
    }
  })
  return atividades;
}

const save = async(arquivo, atividadeUsuario) => {
  const novaAtividade = await DB.usuario_atividade.create({
    data: {
      nome_arquivo: arquivo,
      data_upload: new Date(),
      atividade: { 
        connect: { 
          id: Number(atividadeUsuario.atividade_id)
        }
      }
    }
  })
  
  return novaAtividade;
}

module.exports = {
  save,
}