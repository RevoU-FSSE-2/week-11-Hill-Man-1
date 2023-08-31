const { Router } = require('express')
const { register, login} = require('../middleware/authMiddleware');
const authRouter = Router()

// User registration route
authRouter.post('/register', register);

// User login route
authRouter.post('/login', login);

module.exports = authRouter;