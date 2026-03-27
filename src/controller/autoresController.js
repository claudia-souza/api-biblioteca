import autores from "../model/autores";
import livros from "../model/livros";

class AutoresController {
  static listarTodos(req, res) {
    res.status(200).json(autores);
  }

  static buscarPorId(req, res) {
    const { id } = req.params;
    const autor = autores.find((a) => a.id === parseInt(id));

    if (autor) {
      const livrosDoAutor = autores.filter((l) => l.autorId === autor.id);
      res.status(200).json({ ...autor, livros: livrosDoAutor });
    } else {
      res.status(404).json({ message: "Autor não encontrado" });
    }
  }

  static buscarPorNome(req, res) {
    const { nome } = req.query;
    if (!nome) {
      return res.status(400).json({ message: "O termo de busca (nome) é obrigatório" });
    }
    const autoresFiltrados = autores.filter((a) =>
      a.nome.toLowerCase().includes(nome.toLowerCase())
    );
    res.status(200).json(autoresFiltrados);
  }

  static cadastrar(req, res) {
    const { nome, nacionalidade } = req.body;
    const novoAutor = {
      id: autores.length > 0 ? autores[autores.length - 1].id + 1 : 1,
      nome,
      nacionalidade
    };
    autores.push(novoAutor);
    res.status(201).json(novoAutor);
  }

  static atualizar(req, res) {
    const { id } = req.params;
    const { nome, nacionalidade } = req.body;
    const index = autores.findIndex((a) => a.id === parseInt(id));

    if (index !== -1) {
      autores[index] = { ...autores[index], nome, nacionalidade };
      res.status(200).json(autores[index]);
    } else {
      res.status(404).json({ message: "Autor não encontrado" });
    }
  }

  static remover(req, res) {
    const { id } = req.params;
    const index = autores.findIndex((a) => a.id === parseInt(id));

    if (index !== -1) {
      // Regra de negócio: remover livros do autor ao remover o autor
      for (let i = autores.length - 1; i >= 0; i--) {
        if (livros[i].autorId === parseInt(id)) {
          autores.splice(i, 1);
        }
      }
      autores.splice(index, 1);
      res.status(200).json({ message: "Autor e seus livros removidos com sucesso" });
    } else {
      res.status(404).json({ message: "Autor não encontrado" });
    }
  }
}

export default AutoresController;
