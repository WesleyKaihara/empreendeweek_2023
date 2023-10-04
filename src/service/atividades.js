const DB = require("../../prisma/prisma");

const find = async() => {
  const atividades = await DB.atividade.findMany();
  return atividades;
}

const save = async(atividadeBody) => {
  const atividade = await DB.atividade.create({
    data: {
      ...atividadeBody,
      data_inicial: (new Date(atividadeBody.data_inicial)).toISOString(),
      data_final: (new Date(atividadeBody.data_final)).toISOString(),
    }
  })
  return atividade;
}

module.exports = {
  find,
  save,
}
