import express, { json } from "express";
import livrosRoutes from "./route/livrosRoutes";
import autoresRoutes from "./route/autoresRoutes";

const app = express();

app.use(json());

// Rotas
app.use(livrosRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API de Biblioteca rodando" });
});

export default app;
