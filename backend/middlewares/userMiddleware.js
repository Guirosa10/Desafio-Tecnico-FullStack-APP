const userService = require('../services/userService');


const checkUserandPass = async (req, res, next) => {
	const { email, password } = req.body;
	const checkUser =  await userService.getUser(email);
	
	if(!checkUser || checkUser.length < 1) {
		return res.status(400).send('User not Found');
	}
	const checkedUserPassword = checkUser.password;
	if(checkedUserPassword !== password){
		return res.status(400).send('Invalid password or username');
	}
	next();
};

module.exports = {
	checkUserandPass,
};