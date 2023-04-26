const { getProdutoModel, createProdutoModel } = require('../models/produto.model');
const { generateJWTToken } = require('../utils/jwt');

const getProdutosService = async () => {
    const [produtos] = await getProdutoModel();
    return produtos;
};

const createProdutoService = async (user) => {
    const { id } = await createProdutoModel(user);
    user.id = id;
    return user;
 }

module.exports = {
    getProdutosService,
    createProdutoService
}