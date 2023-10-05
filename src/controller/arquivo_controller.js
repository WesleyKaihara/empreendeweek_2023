const { find } = require('../service/arquivo_service');

const findArquivoByNome = async(req,res) => {
  const nomeArquivo = req.params.nomeArquivo;

  const arquivo = await find(nomeArquivo);
  res.sendFile(arquivo);
}

module.exports = {
  findArquivoByNome,
}