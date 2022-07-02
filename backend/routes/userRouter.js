const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.post('/login', userController.getUser);
userRouter.post('/registration', userController.userRegistration);

module.exports = userRouter;