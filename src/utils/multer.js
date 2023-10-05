const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      const extensaoArquivo = file.originalname.split('.')[1];
      const novoNomeArquivo = new Date().getTime();
      req.arquivo = `${novoNomeArquivo}.${extensaoArquivo}`

      cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
  }
});

const upload = multer({ storage });

module.exports = upload;
