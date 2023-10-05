const express = require("express");
const { findArquivoByNome } = require('../controller/arquivo_controller');
const router = express.Router();

router.get("/arquivo/:nomeArquivo", findArquivoByNome)

module.exports = router;