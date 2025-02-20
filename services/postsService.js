const postsRepository = require('../repositories/postsRepository');

const getPostById = (req, res) => {
        let postId = req.params.postId;
        console.log("Get Post By Id: " + postId);

        try {
            var post = postsRepository.getPostById(postId);
            res.status(200).json(post);
        } catch (error) {
            res.status(error.status).json({msg: error.message, error: error});
        }

};
  
const insertPost = (req, res) => {
    let params = req.body;
    try {
            var post = postsRepository.insertPost(params);
            res.status(200).json(post);
        } catch (error) {
            res.status(error.status).json({msg: error.message, error: error});
        }
};
  
const updatePostById = (req, res) => {
        res.json({message: 'Update Post By Id'});
    };
  
const deletePostById = (req, res) => {
        res.json({message: 'Delete Post By Id'});
    };

const getPosts = (req, res) => {
        res.json({message: 'Get Posts'});
    };

const updatePosts = (req, res) => {
        res.json({message: 'Update posts'});
    };

const deletePosts = (req, res) => {
        res.json({message: 'Delete posts'});
    };

const getAllRelatedPosts = (req, res) => {
        res.json({message: 'Get posts for post'});
    };

const getPostLatestPost = (req, res) => {
        res.json({message: 'Get the latest post for post'});
    };

module.exports = {getPostById, insertPost, updatePostById, deletePostById, getPosts, updatePosts, deletePosts, getAllRelatedPosts, getPostLatestPost};