const path = require('path');

const find = (nomeImagem) => {
  return path.join(__dirname,"..", "..","uploads", nomeImagem);
}

module.exports = {
  find
}