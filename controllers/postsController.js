const express = require('express');
const postsService = require('../services/postsService');

const router = express.Router();

// Single thread
router.get('/:postId', postsService.getPostById);
router.put('/:postId', postsService.updatePostById);
router.delete('/:postId', postsService.deletePostById);
router.get('/', postsService.getPosts);
router.post('/', postsService.insertPost);

module.exports = router;