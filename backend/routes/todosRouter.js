const todosRouter = require('express').Router();
const todosController = require('../controllers/todosController');

todosRouter.get('/user/:id', todosController.getTodos);

module.exports = todosRouter;