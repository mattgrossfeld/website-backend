const express = require('express');
const threadsService = require('../services/threadsService');

const router = express.Router();

// Single thread
router.get('/:threadId', threadsService.getThreadById);
router.post('/:threadId', threadsService.insertThread);
router.put('/:threadId', threadsService.updateThreadById);
router.delete('/:threadId', threadsService.deleteThreadById);

// Multiple threads
router.get('/', threadsService.getThreads);
router.post('/', threadsService.insertThreads);
router.put('/', threadsService.updateThreads);
router.delete('/', threadsService.deleteThreads);

// Thread posts
router.get('/:threadId/posts', threadsService.getThreadPosts);
router.get('/:threadId/latestPost', threadsService.getThreadLatestPost);


module.exports = router;