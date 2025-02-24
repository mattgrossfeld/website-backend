const communitiesRepository = require('../repositories/communitiesRepository');

const getCommunities = async (req, res) => {
    try {
        var communities = await communitiesRepository.getCommunities();
        res.status(200).json(communities);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getCommunityById = async (req, res) => {
        let communityId = req.params.communityId;
        console.log("Get Community By Id: " + communityId);

        try {
            var community = await communitiesRepository.getCommunityById(communityId);
            console.log("Community at service: ");
            console.log(community);
            res.status(200).json(community);
        } catch (error) {
            res.status(404).json({msg: error.message, error: error});
        }

};
  
const insertCommunity = async (req, res) => {
    let params = req.body;
    try {
            var community = await communitiesRepository.insertCommunity(params);
            res.status(200).json(community);
        } catch (error) {
            res.status(400).json({msg: error.message, error: error});
        }
};
  
const updateCommunityById = async (req, res) => {
    let params = req.body;
    let communityId = parseInt(req.params.communityId);
    try {
        var community = await communitiesRepository.updateCommunityById(communityId, params);
        res.status(200).json(community);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};
  
const deleteCommunityById = async (req, res) => {
    let communityId = req.params.communityId;
    console.log("Delete Community By Id: " + communityId);
    try {
        await communitiesRepository.deleteCommunityById(communityId);
        let message = "Community Id " + communityId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getCommunityRolesByCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    try {
        var communityRoles = await communitiesRepository.getCommuniyRolesByCommunityId(communityId);
        res.status(200).json(communityRoles);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getCommunityRoleByCommunityIdAndRoleId = async (req, res) => {
        let communityId = req.params.communityId;
        let communityRoleId = req.params.communityRoleId;
        console.log("Get Community By Id: " + communityId);

        try {
            var communityRole = await communitiesRepository.getCommunityRoleByCommunityIdAndRoleId(communityId, communityRoleId);
            console.log("communityRole at service: ");
            console.log(communityRole);
            res.status(200).json(communityRole);
        } catch (error) {
            res.status(404).json({msg: error.message, error: error});
        }

};
  
const insertCommunityRoleForCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    let params = req.body;
    try {
            var communityRole = await communitiesRepository.insertCommunityRoleForCommunityId(communityId, params);
            res.status(200).json(communityRole);
        } catch (error) {
            res.status(400).json({msg: error.message, error: error});
        }
};
  
const updateCommunityRoleForCommunityId = async (req, res) => {
    let params = req.body;
    let communityId = parseInt(req.params.communityId);
    let communityRoleId = parseInt(req.params.communityRoleId);
    try {
        var communityRole = await communitiesRepository.updateCommunityRoleForCommunityId(communityId, communityRoleId, params);
        res.status(200).json(communityRole);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};
  
const deleteCommunityRoleForCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    let communityRoleId = req.params.communityRoleId;
    console.log("Delete Community By Id: " + communityId);
    try {
        await communitiesRepository.deleteCommunityRoleForCommunityId(communityId, communityRoleId);
        let message = "communityRole Id " + communityId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getCommunityUsersByCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    try {
        var communityUsers = await communitiesRepository.getCommunityUsersByCommunityId(communityId);
        res.status(200).json(communityUsers);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getCommunityUserByCommunityIdAndUserId = async (req, res) => {
        let communityId = req.params.communityId;
        let userId = req.params.userId;
        console.log("Get Community By Id: " + communityId);

        try {
            var communityUsers = await communitiesRepository.getCommunityUserByCommunityIdAndUserId(communityId, userId);
            console.log("Community at service: ");
            console.log(communityUsers);
            res.status(200).json(communityUsers);
        } catch (error) {
            res.status(404).json({msg: error.message, error: error});
        }

};
  
const insertCommunityUserForCommunityId = async (req, res) => {
    let params = req.body;
    let communityId = req.params.communityId;

    try {
            var communityUsers = await communitiesRepository.insertCommunityUserForCommunityId(communityId, params);
            res.status(200).json(communityUsers);
        } catch (error) {
            res.status(400).json({msg: error.message, error: error});
        }
};
  
const updateCommunityUserForCommunityId = async (req, res) => {
    let params = req.body;
    let communityId = parseInt(req.params.communityId);
    let userId = parseInt(req.params.userId);
    try {
        var community = await communitiesRepository.updateCommunityUserForCommunityId(communityId, userId, params);
        res.status(200).json(community);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};
  
const deleteCommunityUserForCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    let userId = parseInt(req.params.userId);
    try {
        await communitiesRepository.deleteCommunityById(communityId, userId);
        let message = "Community Id " + communityId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getPostsByCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    try {
        var posts = await communitiesRepository.getPostsByCommunityId(communityId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getShoutsByCommunityId = async (req, res) => {
    let communityId = req.params.communityId;
    try {
        var shouts = await communitiesRepository.getShoutsByCommunityId(communityId);
        res.status(200).json(shouts);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};



module.exports = {getCommunityById, insertCommunity, updateCommunityById, deleteCommunityById, getCommunities, getCommunityRolesByCommunityId, getCommunityRoleByCommunityIdAndRoleId, insertCommunityRoleForCommunityId, updateCommunityRoleForCommunityId, deleteCommunityRoleForCommunityId, getCommunityUsersByCommunityId, getCommunityUserByCommunityIdAndUserId, insertCommunityUserForCommunityId, updateCommunityUserForCommunityId, deleteCommunityUserForCommunityId, getPostsByCommunityId, getShoutsByCommunityId };