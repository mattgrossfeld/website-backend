const threadsRepository = require('../repositories/threadsRepository');

const getThreadById = (req, res) => {
        let threadId = req.params.threadId;
        let msg = "Get Thread By Id ${threadId}.";

        try {
            var thread = threadsRepository.getThreadById(threadId);
            res.status(200).json(thread);
        } catch (error) {
            res.status(error.status).json({msg: error.message, error: error});
        }

};
  
const insertThread = (req, res) => {
    let params = req.body;
    try {
            var thread = threadsRepository.insertThread(params);
            res.status(200).json(thread);
        } catch (error) {
            res.status(error.status).json({msg: error.message, error: error});
        }
};
  
const updateThreadById = (req, res) => {
        res.json({message: 'Update Thread By Id'});
    };
  
const deleteThreadById = (req, res) => {
        res.json({message: 'Delete Thread By Id'});
    };

const getThreads = (req, res) => {
        res.json({message: 'Get Threads'});
    };

const updateThreads = (req, res) => {
        res.json({message: 'Update threads'});
    };

const deleteThreads = (req, res) => {
        res.json({message: 'Delete threads'});
    };

const getThreadPosts = (req, res) => {
        res.json({message: 'Get posts for thread'});
    };

const getThreadLatestPost = (req, res) => {
        res.json({message: 'Get the latest post for thread'});
    };

module.exports = {getThreadById, insertThread, updateThreadById, deleteThreadById, getThreads, updateThreads, deleteThreads, getThreadPosts, getThreadLatestPost};