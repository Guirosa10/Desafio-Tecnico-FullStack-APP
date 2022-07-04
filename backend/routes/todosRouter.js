const todosRouter = require('express').Router();
const todosController = require('../controllers/todosController');

todosRouter.get('/user/:id', todosController.getTodos);

todosRouter.post('/user/:id', todosController.postTodo);

module.exports = todosRouter;