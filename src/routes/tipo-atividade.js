const express = require("express");
const router = express.Router();

const { listarTiposAtividade, atualizarTipoAtividade, removerTipoAtividade, criarTipoAtividade } = require('../controller/tipo_atividade_controller');

router.get("/tipos-atividade", listarTiposAtividade)
router.post("/tipo-atividade", criarTipoAtividade)
router.put("/tipo-atividade/:id", atualizarTipoAtividade)
router.delete("/tipo-atividade/:id", removerTipoAtividade)

module.exports = router;