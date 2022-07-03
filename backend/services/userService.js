// user registration service
const userModel = require('../models/userModel');

const getUser = async (email) => {
	
	const results = await userModel.getUser(email);
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