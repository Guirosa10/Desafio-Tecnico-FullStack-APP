const connection = require('./connection');

const getTodos = async (id) => {
	const [results] = await connection.execute('SELECT * from todoapp.todos WHERE user_id = ?', [id]);

	return results;
};

module.exports = {
	getTodos,
};