const express = require('express');
const shoutsService = require('../services/shoutsService');

const router = express.Router();

// Single thread
router.get('/:shoutId', shoutsService.getShoutById);
router.put('/:shoutId', shoutsService.updateShoutById);
router.delete('/:shoutId', shoutsService.deleteShoutById);

// Multiple threads
router.get('/', shoutsService.getShouts);
router.post('/', shoutsService.insertShout);


module.exports = router;