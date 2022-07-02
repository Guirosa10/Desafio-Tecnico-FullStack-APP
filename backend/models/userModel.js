// user registration
const connection = require('./connection');

const userRegistration = async (email , password) => {
	await connection.execute('INSERT INTO TodoApp.Users (email, password) VALUES (?,?)', [email, password]);
};

const getUser = async (email) => {
	const [results] = await connection.execute('SELECT * FROM TodoApp.Users WHERE email=(?)', [email]);
	console.log('model', results);
	return results[0];
};

module.exports = {
	userRegistration,
	getUser,
};