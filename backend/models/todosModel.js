const connection = require('./connection');

const getTodos = async (id) => {
	const [results] = await connection.execute('SELECT * from todoapp.todos WHERE user_id = ?', [id]);

	return results;
};

const postTodo = async (id, todo, status) => {
	await connection.execute(`INSERT INTO todoapp.todos 
    (user_id, todo, status) VALUES (?,?,?)`, [id, todo, status]);
};

module.exports = {
	getTodos,
	postTodo,
};