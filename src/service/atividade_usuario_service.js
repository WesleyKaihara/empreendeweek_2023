const DB = require("../../prisma/prisma");

const find = async(id) => {
  const atividades = await DB.usuario_atividade.findMany({
    include: {
      atividade: {
        include: {
          tipo_atividade: true
        }
      }
    }
  })
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
      data_validacao: new Date(),
      arquivo_valido: atividadeUsuario.arquivo_valido,
      atividade: {
        connect: {
          id: Number(atividadeUsuario.atividade_id)
        }
      }
    }
  });
}

const updateStatus = async(id, { pontos, arquivo_valido }) => {
  return await DB.usuario_atividade.update({
    where: { id },
    data: {
      arquivo_valido,
      data_validacao: new Date(),
      pontos
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
  remove,
  updateStatus
}