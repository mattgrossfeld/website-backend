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
router.put('/', postsService.updatePosts);
router.delete('/', postsService.deletePosts);

// Post posts
router.get('/:postId/posts', postsService.getAllRelatedPosts);
router.get('/:postId/latestPost', postsService.getPostLatestPost);


module.exports = router;