const pool = require('../databasePool');
const constants = require('../queries/postsQueries');
const Post = require('../models/Post');

const getPostById = (postId) => {
    var post = new Post();
    console.log("postId: " + postId);
    pool.query(constants.GET_POST_BY_ID, [postId], (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        post.setId(results.rows[0].id);
        post.setTitle(results.rows[0].title);
        post.setBody(results.rows[0].body);
        post.setCreatedTm(results.rows[0].createdTm);
        post.setCreatedBy(results.rows[0].createdBy);
        post.setModifiedBy(results.rows[0].modifiedBy);
        post.setModifiedTm(results.rows[0].modifiedTm);
    });
    return post;
};

const insertPost = (params) => {
    var post = new Post();
    pool.query(constants.INSERT_POST, [params.title, params.body, params.created_tm, params.modified_tm, params.created_by, params.modified_by], (error, results) => {
        if (error) {
            throw error;
        }

        post.setId(results.rows[0].id);
        post.setTitle(results.rows[0].title);
        post.setBody(results.rows[0].body);
        post.setCreatedTm(results.rows[0].createdTm);
        post.setCreatedBy(results.rows[0].createdBy);
        post.setModifiedBy(results.rows[0].modifiedBy);
        post.setModifiedTm(results.rows[0].modifiedTm);
    });
    return post;
};

module.exports = { getPostById, insertPost };