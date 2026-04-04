import { Router } from "express";
import LivrosController from "../controller/livrosController";

const router = Router();

router
  .get("/livros", LivrosController.listarTodos)
  .get("/livros/busca", LivrosController.buscarLivroPorTitulo)
  .get("/livros/:id", LivrosController.buscarPorId)
  .post("/livros", LivrosController.cadastrar)
  .put("/livros/:id", LivrosController.atualizar)
  .delete("/livros/:id", LivrosController.remover);
export default router;
