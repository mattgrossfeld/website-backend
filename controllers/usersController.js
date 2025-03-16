const express = require('express');
const usersService = require('../services/usersService');

const router = express.Router();

// Single thread

router.get('/', usersService.getUsers);
router.get('/:userId', usersService.getUserById);
router.put('/:userId', usersService.updateUserById);
router.delete('/:userId', usersService.deleteUserById);
router.post('/', usersService.insertUser);
router.get('/login', usersService.login);
router.get('/logout', usersService.logout);
router.get('/register', usersService.register);

module.exports = router;