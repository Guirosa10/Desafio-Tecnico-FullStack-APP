const todosModel = require('../models/todosModel');

const getTodos = async (id) => {
	const results = await todosModel.getTodos(id);

	return results;
};

const postTodo = async (id, todo, status) => {
	const results = await todosModel.postTodo(id, todo, status);
	return results;
};

const deleteTodo = async (todoId) => {
	const results = await todosModel.deleteTodos(todoId);

	return results;
};

module.exports = {
	getTodos,
	postTodo,
	deleteTodo,
};