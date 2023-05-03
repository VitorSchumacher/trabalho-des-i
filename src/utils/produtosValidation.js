const Joi = require("joi");

const produtoSchema = Joi.object({
  nome: Joi.string().required(),
  valor_unitario: Joi.number().min(0).required(),
  data_compra: Joi.date().max("now").required(),
  descricao: Joi.string().required(),
  marca: Joi.string().required(),
  imagem_url: Joi.string().required(),
  quantidade: Joi.number().min(0).required(),
});

module.exports = { produtoSchema };
