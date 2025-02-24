const express = require('express');
const shoutsService = require('../services/shoutsService');

const router = express.Router();

router.get('/:shoutId', shoutsService.getShoutById);
router.put('/:shoutId', shoutsService.updateShoutById);
router.delete('/:shoutId', shoutsService.deleteShoutById);
router.get('/', shoutsService.getShouts);
router.post('/', shoutsService.insertShout);


module.exports = router;