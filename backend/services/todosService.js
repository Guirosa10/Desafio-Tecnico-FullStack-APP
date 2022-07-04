const todosModel = require('../models/todosModel');

const getTodos = async (id) => {
	const results = await todosModel.getTodos(id);

	return results;
};

module.exports = {
	getTodos,
};