const todosService = require('../services/todosService');

const getTodos = async (req, res, next) => {
	try {
		const { id } = req.params;
		const results = await todosService.getTodos(id);

		return res.status(200).json(results);
	} catch (error) {
		next(error);
	}
};

const postTodo = async (req, res, next) => {
	try {
		const { id, todo } = req.body;
		let status = req.body.status;
		const statusResponse = typeof status === 'undefined' ? 'pendente' : status;
		const results = await todosService.postTodo(id, todo, statusResponse);
		return res.status(200).json(results);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getTodos,
	postTodo,
};