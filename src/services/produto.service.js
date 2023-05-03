const {
  getProdutoModel,
  createProdutoModel,
  getProdutoByIdModel,
  deleteProdutoModel,
  getProdutoByNomeModel,
  updateProdutoModel,
  validateProdutoNameModel
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

const deleteProdutoService = async (id) => {
  return await deleteProdutoModel(id);
};

const updateProdutoService = async (produto) => {
    return await updateProdutoModel(produto);
}

const validateProdutoNameService = async (nome) => {
    const produto = await validateProdutoNameModel(nome);
    return (produto[0].length > 0)
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
