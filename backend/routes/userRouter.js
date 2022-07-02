const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.post('/login', userController.getUser);

module.exports = userRouter;