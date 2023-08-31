const { Router } = require('express');
const { authorizationUser } = require('../middleware/authorizeMiddleware');
const userController = require('../controller/usersController');

const userRouter = Router();

userRouter.get('/allbooks', authorizationUser, userController.getAllBooks); // Get all books
userRouter.get('/books/:bookStatus', authorizationUser, userController.searchBookStatus); // Search books by status
userRouter.patch('/updatebookstatus/:id', authorizationUser, userController.updateBookStatus); // Update book status

module.exports = userRouter;
