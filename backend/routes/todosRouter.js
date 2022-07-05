const todosRouter = require('express').Router();
const todosController = require('../controllers/todosController');

todosRouter.get('/user/:id', todosController.getTodos);

todosRouter.post('/user/:id', todosController.postTodo);

todosRouter.delete('/todo/:id', todosController.deleteTodo);

todosRouter.put('/todo', todosController.updateTodo);

module.exports = todosRouter;