const DB = require("../../prisma/prisma");

const create = async(usuarioBody) => {
  const { especializacao_id, ...data } = usuarioBody;

  const usuario = await DB.usuario.create({
    data: {
      ...data,
      especializacao: {
        connect: { id: Number(especializacao_id)}
      }
    }
  })
  return usuario;
}

const findOne = async(id) => {
  return await DB.usuario.findFirst({
    where: { id },
    include: {
      especializacao: true
    }
  });
}

const update = async(id, usuarioBody) => {
  const { especializacao_id, ...data } = usuarioBody;

  return await DB.usuario.update({
    where: { id },
    data: {
      ...data
    }
  })
}

const remove = async(id) => {
  return await DB.usuario.delete({
    where: { id }
  })
}

const estatisticas = async(id) => {
  return await DB.$queryRaw`SELECT SUM(ua.pontos) as pontos FROM usuario_atividade ua`
}

module.exports = {
  findOne,
  create,
  update,
  remove,
  estatisticas
}
