const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const assembleiaGeral34 = await prisma.atividade.create({
    data: {
      nome: '34º Assembléia Geral Extraordinária', 
      data_inicial: "2022-02-02",
      data_final: "2022-02-02",
      tipo_atividade: {
        create: {
          nome: "Assembléias",
          interna: true,
        }
      }
    }
  })

  const palestraCooperativismo = await prisma.atividade.create({
    data: {
      nome: 'Palestra Cooperativismo', 
      data_inicial: "2022-03-08",
      data_final: "2022-03-08",
      tipo_atividade: {
        create: {
          nome: "Pelestras",
          interna: true,
        }
      }
    }
  })

  console.log({
    assembleiaGeral34,
    palestraCooperativismo
  });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })