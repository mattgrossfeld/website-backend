const express = require('express');
const communitiesService = require('../services/communitiesService');

const router = express.Router();

// Single community
router.get('/:communityId', communitiesService.getCommunityById);
router.get('/', communitiesService.getCommunities);
router.post('/', communitiesService.insertCommunity);
router.put('/:communityId', communitiesService.updateCommunityById);
router.delete('/:communityId', communitiesService.deleteCommunityById);

router.get('/:communityId/roles', communitiesService.getCommunityRolesByCommunityId); 
router.get('/:communityId/roles/:communityRoleId', communitiesService.getCommunityRoleByCommunityIdAndRoleId); 
router.post('/:communityId/roles', communitiesService.insertCommunityRoleForCommunityId);
router.put('/:communityId/roles/:communityRoleId', communitiesService.updateCommunityRoleForCommunityId);
router.delete('/:communityId/roles/:communityRoleId', communitiesService.deleteCommunityRoleForCommunityId);

router.get('/:communityId/users', communitiesService.getCommunityUsersByCommunityId); 
router.get('/:communityId/users/:userId', communitiesService.getCommunityUserByCommunityIdAndUserId); 
router.post('/:communityId/users', communitiesService.insertCommunityUserForCommunityId);
router.put('/:communityId/users/:userId', communitiesService.updateCommunityUserForCommunityId);
router.delete('/:communityId/users/:userId', communitiesService.deleteCommunityUserForCommunityId);

router.get('/:communityId/posts', communitiesService.getPostsByCommunityId);
router.get('/:communityId/shouts', communitiesService.getShoutsByCommunityId);


module.exports = router;