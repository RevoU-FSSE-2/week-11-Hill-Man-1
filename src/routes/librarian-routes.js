const { Router } = require('express');
const { authorizationLibrarian } = require('../middleware/authorizeMiddleware');
const librarianController = require('../controller/librarianController'); // Assuming you have a librarianController module

const librarianRouter = Router();

librarianRouter.get('/allbooks', authorizationLibrarian, librarianController.getAllBooks); // Get all books
librarianRouter.get('/users', authorizationLibrarian, librarianController.getUsers); // Example of a more descriptive route
librarianRouter.post('/inputbook', authorizationLibrarian, librarianController.inputBook); // Input book
librarianRouter.patch('/updatebook/:id', authorizationLibrarian, librarianController.updateBook); // Update book
librarianRouter.delete('/deletebook/:id', authorizationLibrarian, librarianController.deleteBook); // Delete book

module.exports = librarianRouter;
