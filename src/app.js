const express = require("express");
const app = express();

const livrosRoutes = require("./route/livrosRoutes");

app.use(express.json());

// Rotas
app.use(livrosRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API de Biblioteca rodando" });
});

module.exports = app;
