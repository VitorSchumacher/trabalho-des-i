const { Router } = require("express");

const { getProdutosService, createProdutoService } = require("../services/produto.service");

const produtosRoutes = Router();

produtosRoutes.get('/', async (req, res) => {
    const produtos = await getProdutosService();
    return res.status(200).json(produtos);
});

produtosRoutes.post('/', async (req, res) => {
    const produtoCreated = await createProdutoService(req.body);
    console.log(produtoCreated)
    return res.status(200).json(produtoCreated);
});
module.exports = produtosRoutes;