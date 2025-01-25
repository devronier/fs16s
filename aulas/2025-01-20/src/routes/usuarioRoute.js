const { Router } = require("express");
const { buscarUsuarios } = require("../controller/usuarioController");

const usuarioRouter = Router();

usuarioRouter.get("/usuarios", buscarUsuarios);

module.exports = { usuarioRouter };
