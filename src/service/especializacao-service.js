const DB = require("../../prisma/prisma");

const findMany = async() => {
  const especializacoes = await DB.especializacao.findMany();
  return especializacoes;
}

const save = async(nome) => {
  const especializacao = await DB.especializacao.create({
    data: {
      nome
    }
  })
  return especializacao;
}

module.exports = {
  save,
  findMany
}