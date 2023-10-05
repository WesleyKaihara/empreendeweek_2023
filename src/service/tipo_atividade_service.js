const DB = require("../../prisma/prisma");

const find = async() => {
  return await DB.tipo_atividade.findMany();
}

const create = async({nome, interna}) => {
  return await DB.tipo_atividade.create({
    data: {
      nome,
      interna
    }
  })
}

const update = async(id, tipoAtividadeBody) => {
  return await DB.tipo_atividade.update({
    where: { id },
    data: {
      ...tipoAtividadeBody
    }
  })
}

const remove = async(id) => {
  return await DB.tipo_atividade.delete({
    where: { id }
  })
}

module.exports = {
  find,
  create,
  update,
  remove
}