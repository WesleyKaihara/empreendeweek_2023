const express = require("express");
const { criarEspecializacao,listarEspecializacoes, atualizarEspecializacao, removerEspecializacao } = require('../controller/especializacao_controller');
const router = express.Router();

router.get("/especializacoes", listarEspecializacoes)
router.post("/especializacao", criarEspecializacao)
router.put("/especializacao/:id", atualizarEspecializacao)
router.delete("/especializacao/:id", removerEspecializacao)

module.exports = router;