const multer = require("multer");
const upload = require("../utils/multer");
const express= require("express");
const router = express.Router();

const { saveAtividadeUsuario, listarAtividadesUsuario } = require('../controller/atividade-usuario.controller');

router.get("/atividades",listarAtividadesUsuario);
router.post("/atividade", upload.single('atividade_arquivo'),saveAtividadeUsuario);

module.exports = router;
