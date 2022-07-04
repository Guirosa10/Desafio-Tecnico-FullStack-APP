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

module.exports = {
	getTodos,
};