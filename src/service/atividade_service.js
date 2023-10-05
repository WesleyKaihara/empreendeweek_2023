const DB = require("../../prisma/prisma");

const find = async(usuarioFiltro) => {
  const atividades = await DB.atividade.findMany();
  return atividades;
}

const create = async(atividadeBody) => {
  const atividade = await DB.atividade.create({
    data: {
      ...atividadeBody,
      data_inicial: (new Date(atividadeBody.data_inicial)).toISOString(),
      data_final: (new Date(atividadeBody.data_final)).toISOString(),
    }
  }) 
  return atividade;
}

const update = async(id, atividadeBody) => {
  return await DB.atividade.update({
    where: { id },
    data: {
      ...atividadeBody,
      data_inicial: (new Date(atividadeBody.data_inicial)).toISOString(),
      data_final: (new Date(atividadeBody.data_final)).toISOString(),
    }
  })
}

const remove = async(id) => { 
  return await DB.atividade.delete({
    where: { id }
  })
}

module.exports = {
  find,
  create,
  update,
  remove
}
