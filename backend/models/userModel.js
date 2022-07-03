// user registration
const connection = require('./connection');

const userRegistration = async (email , password) => {
	const [results] = await connection.execute('INSERT INTO TodoApp.Users (email, password) VALUES (?,?)', [email, password]);
	const returnedObj = {
		id: results.insertId,
		email,
	};
	return returnedObj;
};

const getUser = async (email) => {
	const [results] = await connection.execute('SELECT * FROM TodoApp.Users WHERE email=(?)', [email]);
	
	return results[0];
};

module.exports = {
	userRegistration,
	getUser,
};