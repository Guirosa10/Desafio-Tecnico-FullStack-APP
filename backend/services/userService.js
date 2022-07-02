// user registration service
const userModel = require('../models/userModel');

const getUser = async (email) => {
	console.log('cheguei no service');
	const results = await userModel.getUser(email);
	console.log('service', results);
	return results;
};

const userRegistration = async (email, password) => {
	const results = await userModel.userRegistration(email, password);
	
	return results;
};

module.exports = {
	getUser,
	userRegistration,
};