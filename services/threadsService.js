module.exports = {
    getThreadById: (req, res) => {
        let threadId = req.params.threadId;
        let msg = "Get Thread By Id ${threadId}.";
        
      res.json({message: msg});
    },
  
    insertThreadById: (req, res) => {
        res.json({message: 'Insert Thread By Id'});
    },
  
    updateThreadById: (req, res) => {
        res.json({message: 'Update Thread By Id'});
    },
  
    deleteThreadById: (req, res) => {
        res.json({message: 'Delete Thread By Id'});
    },

    getThreads: (req, res) => {
        res.json({message: 'Get Threads'});
    },

    insertThreads: (req, res) => {
        res.json({message: 'Insert threads'});
    },

    updateThreads: (req, res) => {
        res.json({message: 'Update threads'});
    },

    deleteThreads: (req, res) => {
        res.json({message: 'Delete threads'});
    },

    getThreadPosts: (req, res) => {
        res.json({message: 'Get posts for thread'});
    },

    getThreadLatestPost: (req, res) => {
        res.json({message: 'Get the latest post for thread'});
    },
};
