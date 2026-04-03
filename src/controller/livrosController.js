const livros = require("../models/livros");

// List livros
exports.listarLivros = (req, res) => {
  res.json(livros);
};

// Buscando livro por ID

exports.buscarLivro = (req, res) => {
  const id = parseInt(req.params.id);

  const livro = livros.find((l) => l.id === id);

  // Verifica se o livro nfoi encontrado.
  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado" });
  }

  res.json(livro);
};

// Create livros
exports.cadastrarLivro = (req, res) => {};

// Atualizar livros
exports.atualizarLivro = (req, res) => {};

//Delete livrois
exports.removerLivro = (req, res) => {};

// Extras sugeridos: busca por autor ou titulo.
//buscar livro por titulo (obs: pontos extras )
exports.buscarLivroPorTitulo = (req, res) => {};
