// user registration
const connection = require('./connection');

const userRegistration = async (email , password) => {
	await connection.execute('INSERT INTO TodoApp.Users (email, password) VALUES (?,?)', [email, password]);
};

module.exports = {
	userRegistration,
};