const express = require('express');
const postsService = require('../services/postsService');

const router = express.Router();

// Single thread
router.get('/:postId', postsService.getPostById);
router.put('/:postId', postsService.updatePostById);
router.delete('/:postId', postsService.deletePostById);

// Multiple threads
router.get('/', postsService.getPosts);
router.post('/', postsService.insertPost);
router.get('/communities/:communityId', postsService.getPostsByCommunityId);

module.exports = router;