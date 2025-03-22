const express = require('express');
const router = express.Router();
const usersService = require('../services/usersService');
const { verifyToken } = require('../middleware/authMiddleware'); // Ensure correct import

// Public routes
router.post('/login', usersService.login);
router.post('/register', usersService.insertUser);

// Protected routes
router.get('/:userId', verifyToken, usersService.getUserById);
router.put('/:userId', verifyToken, usersService.updateUserById);
router.delete('/:userId', verifyToken, usersService.deleteUserById);
router.get('/', verifyToken, usersService.getUsers);

module.exports = router;