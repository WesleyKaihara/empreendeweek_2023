const express = require("express");
const { saveEspecializacao ,listarEspecializacao } = require('../controller/especializacao-controller');
const router = express.Router();

router.get("/especializacoes", listarEspecializacao)
router.post("/especializacao", saveEspecializacao)

module.exports = router;