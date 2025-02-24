const pool = require('../databasePool');
const constants = require('../queries/postsQueries');
const Post = require('../models/Post');

async function getPosts() {
    var posts = new Array();
    const results = await pool.query(constants.GET_POSTS);
    console.log(results.rows);
    for (i = 0; i < results.rows.length; i++) {
        let post = new Post();
        post.setId(results.rows[i].id);
        post.setTitle(results.rows[i].title);
        post.setBody(results.rows[i].body);
        post.setCommunityId(results.rows[i].community_id);
        post.setParentPostId(results.rows[i].parent_post_id);
        posts.push(post);
    }
    return posts;
};

async function getPostById(postId) {
    var post = new Post();
    console.log("postId: " + postId);
    const results = await pool.query(constants.GET_POST_BY_ID, [postId]);
    post.setId(results.rows[0].id);
    post.setTitle(results.rows[0].title);
    post.setBody(results.rows[0].body);
    post.setCommunityId(results.rows[0].community_id);
    post.setParentPostId(results.rows[0].parent_post_id);
    return post;
};

async function insertPost(params) {
    var post = new Post();
    console.log(params);
    const results = await pool.query(constants.INSERT_POST, [params.title, params.body, params.communityId, params.parentPostId, params.createdBy, params.modifiedBy]);
    post.setId(results.rows[0].id);
    post.setTitle(results.rows[0].title);
    post.setBody(results.rows[0].body);
    post.setCommunityId(results.rows[0].community_id);
    post.setParentPostId(results.rows[0].parent_post_id);
    return post;
};

async function updatePostById(postId, params) {
    var updatedPost = new Post();
    console.log(postId);
    console.log(params);
    const results = await pool.query(constants.UPDATE_POST_BY_ID, [params.title, params.body, params.communityId, params.parentPostId, params.modifiedBy, postId]);
    updatedPost.setId(results.rows[0].id);
    updatedPost.setTitle(results.rows[0].title);
    updatedPost.setBody(results.rows[0].body);
    updatedPost.setCommunityId(results.rows[0].community_id);
    updatedPost.setParentPostId(results.rows[0].parent_post_id);
    return updatedPost;
};

async function deletePostById(postId) {
    console.log("postId: " + postId);
    await pool.query(constants.DELETE_POST_BY_ID, [postId]);
};

module.exports = { getPostById, insertPost, getPosts, updatePostById, deletePostById };