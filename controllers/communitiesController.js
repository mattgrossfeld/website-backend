const express = require('express');
const communitiesService = require('../services/communitiesService');

const router = express.Router();

// Single community
router.get('/:communityId', communitiesService.getCommunityById);
router.put('/:communityId', communitiesService.updateCommunityById);
router.delete('/:communityId', communitiesService.deleteCommunityById);
router.post('/', communitiesService.insertCommunity);

// Multiple communities
router.get('/', communitiesService.getCommunities);


// Community communities

module.exports = router;