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
const getProdutoByIdModel = async (id) => {
  return await connection.execute('SELECT * FROM produtos WHERE id = ?', [id]);
};

const getProdutoByNomeModel = async (nome) => {
  return await connection.execute("SELECT * FROM produtos WHERE nome LIKE '%" + nome + "%'");
};

const deleteProdutoModel = async (id) => {
  await connection.execute('DELETE FROM produtos WHERE id = ?', [id]);
  return "Produto deletado com sucesso!";
};

const updateProdutoModel = async (produto) => {
  const [produtoUpdated] = await connection.execute(`UPDATE produtos SET nome = ?, descricao = ?, valor_unitario = ?, marca = ?, imagem_url = ?, quantidade= ?, data_compra = ? WHERE id = ?`, [produto.nome, produto.descricao, produto.valor_unitario, produto.marca, produto.imagem_url, produto.quantidade, produto.data_compra, produto.id]);
  return produtoUpdated; 
}

const validateProdutoNameModel = async(nome) => {
  return await connection.execute('SELECT id FROM produtos WHERE nome = ?', [nome]);
}

module.exports = { getProdutoModel, createProdutoModel, getProdutoByIdModel, deleteProdutoModel, getProdutoByNomeModel, updateProdutoModel, validateProdutoNameModel };
