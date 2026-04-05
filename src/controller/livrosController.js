const livros = require("../model/livros");

// List livros
exports.listarTodos = (req, res) => {
  res.json(livros);
};

// Buscando livro por ID

exports.buscarPorId = (req, res) => {
  const id = parseInt(req.params.id);

  const livro = livros.find((l) => l.id === id);

  // Verifica se o livro nfoi encontrado.
  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado" });
  }

  res.json(livro);
};

// Create livros
exports.cadastrar = (req, res) => {};

// Atualizar livros
exports.atualizar = (req, res) => {};

//Delete livrois
exports.remover = (req, res) => {};

// Extras sugeridos: busca por autor ou titulo.
//buscar livro por titulo (obs: pontos extras )
exports.buscarPorTitulo = (req, res) => {};
