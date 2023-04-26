const { Router } = require("express");
const userService = require('../services/user.service');
const authenticationMiddleware = require('../middlewares/auth.middleware');

const userRoutes = Router();

// Define a rota para listar todos os usuários
userRoutes.get('/', async (req, res) => {
    const users = await userService.getUsersService();
    return res.status(200).json(users);
});

// Define a rota para buscar um usuário por ID
userRoutes.get('/:id', authenticationMiddleware, async (req, res) => {
    const { id } = req.params;

    const user = await userService.getUserByIdService(id);
    return res.status(200).json(user);
});

// Define a rota para criar um novo usuário
userRoutes.post('/', async (req, res) => {
    const userCreated = await userService.createUserService(req.body);
    console.log(userCreated)
    return res.status(200).json(userCreated);
});

// Define a rota para atualizar um usuário existente por ID
userRoutes.put('/:id', async (req, res) => {
    const { id } = req.params;
    const userUpdated = await userService.updateUserService(id, req.body);
    return res.status(200).json(userUpdated);
});

// Define a rota para excluir um usuário existente por ID
userRoutes.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const userDeleted = await userService.deleteUserService(id);
    return res.status(200).json(userDeleted);
});

userRoutes.post('/login', async (req, res) => {
    const token = await userService.authentication(req.body);
    res.status(200).json(token);
})

module.exports = userRoutes;