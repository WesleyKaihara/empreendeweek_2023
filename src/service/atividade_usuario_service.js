const DB = require("../../prisma/prisma");

const find = async(id) => {
  const atividades = await DB.usuario_atividade.findMany()
  return atividades;
}

const create = async(arquivo, atividadeUsuario) => {
  const novaAtividade = await DB.usuario_atividade.create({
    data: {
      nome_arquivo: arquivo,
      data_upload: new Date(),
      pontos: Number(atividadeUsuario.pontos),
      atividade: { 
        connect: { 
          id: Number(atividadeUsuario.atividade_id)
        }
      }
    }
  });
  
  return novaAtividade;
}

const update = async(id, arquivo, atividadeUsuario) => {
  return await DB.usuario_atividade.update({
    where: { id },
    data: {
      nome_arquivo: arquivo,
      data_upload: new Date(),
      pontos: Number(atividadeUsuario.pontos),
      atividade: {
        connect: {
          id: Number(atividadeUsuario.atividade_id)
        }
      }
    }
  });
}

const remove = async(id) => {
  return await DB.usuario_atividade.delete({
    where: { id }
  });
}

module.exports = {
  create,
  find,
  update,
  remove
}