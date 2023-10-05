const express = require("express");
const router = express.Router();

const { listarAtividades, criarAtividade, atualizarAtividade, removerAtividade } = require('../controller/atividade_controller');

router.get("/atividades", listarAtividades) 
router.post("/atividade", criarAtividade) 
router.put("/atividade/:id", atualizarAtividade) 
router.delete("/atividade/:id", removerAtividade) 

module.exports = router;