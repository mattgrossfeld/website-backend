const postsRepository = require('../repositories/postsRepository');

const getPostById = async (req, res) => {
        let postId = req.params.postId;
        console.log("Get Post By Id: " + postId);

        try {
            var post = await postsRepository.getPostById(postId);
            console.log("Post at service: ");
            console.log(post);
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({msg: error.message, error: error});
        }

};

const getPostsByCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    console.log("Get communityId By Id: " + communityId);

    try {
        var post = await postsRepository.getPostsByCommunityId(communityId);
        console.log("communityId at service: ");
        console.log(post);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }

};
  
const insertPost = async (req, res) => {
    let params = req.body;
    try {
            var post = await postsRepository.insertPost(params);
            res.status(200).json(post);
        } catch (error) {
            res.status(400).json({msg: error.message, error: error});
        }
};
  
const updatePostById = async (req, res) => {
    let params = req.body;
    let postId = parseInt(req.params.postId);
    try {
        var post = await postsRepository.updatePostById(postId, params);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};
  
const deletePostById = async (req, res) => {
    let postId = req.params.postId;
    console.log("Delete Post By Id: " + postId);
    try {
        await postsRepository.deletePostById(postId);
        let message = "Post Id " + postId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getPosts = async (req, res) => {
    try {
        var posts = await postsRepository.getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

module.exports = {getPostById, insertPost, updatePostById, deletePostById, getPosts, getPostsByCommunityId };