const express = require("express");
const router = express.Router();

const LivrosController = require("../controller/livrosController");
router
  .get("/livros", LivrosController.listarTodos)
  .get("/livros/busca", LivrosController.buscarPorTitulo)
  .get("/livros/:id", LivrosController.buscarPorId)
  .post("/livros", LivrosController.cadastrar)
  .put("/livros/:id", LivrosController.atualizar)
  .delete("/livros/:id", LivrosController.remover);

module.exports = router;
