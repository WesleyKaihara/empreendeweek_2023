const DB = require("../../prisma/prisma");

const find = async() => {
  return await DB.especializacao.findMany();
}

const create = async(nome) => {
  return await DB.especializacao.create({
    data: {
      nome
    }
  })
}

const update = async(id,especializacaoBody) => {
  return await DB.especializacao.update({
    where: { id },
    data: {
      ...especializacaoBody
    }
  })
}

const remove = async(id) => {
  return await DB.especializacao.delete({
    where: { id }
  })
}

module.exports = {
  find,
  create,
  update,
  remove
}