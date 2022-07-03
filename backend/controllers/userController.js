// user registration controller
const userService = require('../services/userService');

const getUser = async (req, res, next) => {
	const { email } = req.body;
	console.log(email);
	try {
		const results = await userService.getUser(email);
		console.log('controller', results);
		return res.status(200).json(results);
	} catch (error) {
		next(error);
	}
};

const userRegistration = async (req, res, next) => {
	const {email, password} = req.body;
	try {
		const checkUser = await userService.getUser(email);
		if(checkUser) {
			return res.status(400).send('Email already registered');
		}
		const results = await userService.userRegistration(email, password);
		return res.status(201).json(results);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getUser,
	userRegistration
};