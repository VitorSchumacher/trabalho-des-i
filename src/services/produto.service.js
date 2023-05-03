const {
  getProdutoModel,
  createProdutoModel,
  getProdutoByIdModel,
  deleteProdutoModel,
  getProdutoByNomeModel,
  updateProdutoModel,
  validateProdutoModel
} = require("../models/produto.model");
const { generateJWTToken } = require("../utils/jwt");

const getProdutosService = async () => {
  const [produtos] = await getProdutoModel();
  return produtos;
};

const createProdutoService = async (produto) => {
  const { id } = await createProdutoModel(produto);
  produto.id = id;
  return produto;
};

const getUserByIdService = async (id) => {
  const [produto] = await getProdutoByIdModel(id);
  return produto;
};

const getUserByNomeService = async (nome) => {
    const [produto] = await getProdutoByNomeModel(nome);
    return produto;
  };

const deleteProdutoService = (id) => {
  return deleteProdutoModel(id);
};

const updateProdutoService = (produto) => {
    return updateProdutoModel(produto);
}

const validateProdutoNameService = (nome) => {
    const produto = validateProdutoModel(nome);
    if (produto.length > 0) {
        throw {message: "Produto já existe"}
    }
}
module.exports = {
  getProdutosService,
  createProdutoService,
  getUserByIdService,
  deleteProdutoService,
  getUserByNomeService,
  updateProdutoService,
  validateProdutoNameService
};
