const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const userVerification = require('../middlewares/userMiddleware');

userRouter.post('/login', userVerification.checkUserandPass , userController.userLogin);
userRouter.post('/registration', userController.userRegistration);

module.exports = userRouter;