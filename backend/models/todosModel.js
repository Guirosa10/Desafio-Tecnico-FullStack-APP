const connection = require('./connection');

const getTodos = async (id) => {
	const [results] = await connection.execute('SELECT * from todoapp.todos WHERE user_id = ?', [id]);

	return results;
};

const postTodo = async (id, todo, status) => {
	await connection.execute(`INSERT INTO todoapp.todos 
    (user_id, todo, status) VALUES (?,?,?)`, [id, todo, status]);
};

const deleteTodos = async (todoId) => {
	await connection.execute('DELETE FROM todoapp.todos WHERE todo_id = ?', [todoId]);
};

const updateTodo = async (todo, status, todoId) => {
	await connection.execute('UPDATE todoapp.todos SET todo = ?, status= ? WHERE todo_id = ?', [todo, status, todoId]);
};

module.exports = {
	getTodos,
	postTodo,
	deleteTodos,
	updateTodo,
};