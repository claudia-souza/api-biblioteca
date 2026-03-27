import { Router } from "express";
import AutoresController from "../controller/autoresController";

const router = Router();

router
  .get("/autores", AutoresController.listarTodos)
  .get("/autores/busca", AutoresController.buscarPorNome)
  .get("/autores/:id", AutoresController.buscarPorId)
  .post("/autores", AutoresController.cadastrar)
  .put("/autores/:id", AutoresController.atualizar)
  .delete("/autores/:id", AutoresController.remover);

export default router;
