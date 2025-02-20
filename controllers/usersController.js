const express = require('express');
const usersService = require('../services/usersService');

const router = express.Router();

// Single thread

router.get('/', usersService.getUsers);
router.get('/:userId', usersService.getUserById);
router.put('/:userId', usersService.updateUserById);
router.delete('/:userId', usersService.deleteUserById);
router.post('/', usersService.insertUser);

module.exports = router;