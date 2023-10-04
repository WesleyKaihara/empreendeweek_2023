const express = require("express");
const router = express.Router();

const { listarAtividades, saveAtividade } = require('../controller/atividades');

router.get("/atividades", listarAtividades) 
router.post("/atividade", saveAtividade) 

module.exports = router;