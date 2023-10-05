const express = require("express");
const router = express.Router();
const { encontrarUsuario, createUsuario, atualizarUsuario, removerUsuario } = require("../controller/usuario_controller")

router.get("/usuario/:id", encontrarUsuario)
router.post("/usuario", createUsuario)
router.put("/usuario/:id", atualizarUsuario)
router.delete("/usuario/:id", removerUsuario)

module.exports = router;