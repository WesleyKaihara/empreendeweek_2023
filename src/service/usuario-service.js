const DB = require("../../prisma/prisma");

const save = async(nome) => {
  const especializacao = await DB.usuario.create({
    data: {
      nome,
      login,
      admin,
    }
  })
  return especializacao;
}

module.exports = {
  save,
}
