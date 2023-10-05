const express = require("express");
const { saveUsuario } = require('../controller/usuario-controller');
const router = express.Router();

router.post("/usuario", saveUsuario)

module.exports = router;