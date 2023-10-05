const multer = require("multer");
const upload = require("../utils/multer");
const express= require("express");
const router = express.Router();

const { listarAtividadesUsuario, createAtividadeUsuario, atualizarAtividadeUsuario, removerAtividadeUsuario } = require('../controller/atividade_usuario_controller');

router.get("/atividades/:id",listarAtividadesUsuario);
router.post("/atividade-usuario", upload.single('atividade_arquivo'),createAtividadeUsuario);
router.put("/atividade-usuario/:id", upload.single('atividade_arquivo'),atualizarAtividadeUsuario);
router.delete("/atividade-usuario/:id", removerAtividadeUsuario);

module.exports = router;
