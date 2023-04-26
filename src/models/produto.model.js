const connection = require('../database/connection');

// Define a rota para listar todos os usuários
const getProdutoModel = () => {
  return connection.execute("SELECT * FROM produtos");
};

const createProdutoModel = async (produto) => {
    const [produtoCreated] = await connection.execute(`INSERT INTO produtos (nome, descricao, valor_unitario, marca, imagem_url, quantidade, data_compra) VALUES (?, ?, ?, ?, ?, ?, ?)`, [produto.nome, produto.descricao, produto.valor_unitario, produto.marca, produto.imagem_url, produto.quantidade, produto.data_compra]);
    return { 
        id: produtoCreated.insertId
    };
};

module.exports = { getProdutoModel, createProdutoModel };
