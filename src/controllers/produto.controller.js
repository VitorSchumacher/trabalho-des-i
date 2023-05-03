const { Router } = require("express");

const produtosService = require("../services/produto.service");
const { produtoSchema } = require("../utils/produtosValidation");
const { authenticateToken } = require("../utils/jwt");

const produtosRoutes = Router();

produtosRoutes.get("/", async (req, res) => {
  const produtos = await produtosService.getProdutosService();
  return res.status(200).json(produtos);
});

produtosRoutes.post("/", async (req, res) => {
  const { error } = produtoSchema.validate(req.body);
  if (error) {
    console.error(error);
    res.status(400).send({ message: error.details[0].message });
  }
  const jaExiste = await produtosService.validateProdutoNameService(req.body.nome);
  if(jaExiste) {
    return res.status(400).json({message: "Produto "+req.body.nome+" já existe."});
  }

  const produtoCreated = await produtosService.createProdutoService(req.body);
  console.log(produtoCreated);
  return res.status(200).json(produtoCreated);
});

produtosRoutes.put("/", async (req, res) => {
  const token = req.headers.authorization;
  const payload = await authenticateToken(token);
  const produtoUpdated = await produtosService.updateProdutoService(req.body);
  console.log(produtoUpdated);
  return res.status(200).json(produtoUpdated);
});

produtosRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await produtosService.getUserByIdService(id);
  return res.status(200).json(user);
});

produtosRoutes.post("/nome", async (req, res) => {
  const nome = req.body.nome;
  console.log(nome);
  const produtoNome = await produtosService.getUserByNomeService(nome);
  return res.status(200).json(produtoNome);
});

produtosRoutes.delete("/:id", async (req, res) => {
  const token = req.headers.authorization;
  const payload = await authenticateToken(token);
  const { id } = req.params;
  const produtosDeleted = await produtosService.deleteProdutoService(id);
  return res.status(200).json(produtosDeleted);
});

module.exports = produtosRoutes;
