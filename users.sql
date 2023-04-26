CREATE TABLE `teste`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(20) NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE Produtos (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    imagem_url VARCHAR(100),
    quantidade INT NOT NULL,
    data_compra DATE NOT NULL,
    PRIMARY KEY (id));