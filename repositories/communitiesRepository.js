const pool = require('../databasePool');
const constants = require('../queries/communitiesQueries');
const Community = require('../models/Community');
const User = require('../models/Community');
const Role = require('../models/Community');
const Post = require('../models/Post');
const Shout = require('../models/Shout');

async function getCommunities() {
    var communities = new Array();
    const results = await pool.query(constants.GET_COMMUNITIES);
    console.log(results.rows);
    for (let i = 0; i < results.rows.length; i++) {
        let community = new Community();
        community.setId(results.rows[i].id);
        community.setDisplayName(results.rows[i].display_name);
        communities.push(community);
    }
    return communities;
};

async function getCommunityById(communityId) {
    var community = new Community();
    console.log("communityId: " + communityId);
    const results = await pool.query(constants.GET_COMMUNITY_BY_ID, [communityId]);
    community.setId(results.rows[0].id);
    community.setCommunityName(results.rows[0].community_name);
    community.setCommunityDescription(results.rows[0].community_desc);

    return community;
};

async function insertCommunity(params) {
    var community = new Community();
    console.log(params);
    const results = await pool.query(constants.INSERT_COMMUNITY, [params.communityName, params.communityDesc, params.createdBy, params.modifiedBy]);
    community.setId(results.rows[0].id);
    community.setCommunityName(results.rows[0].community_name);
    community.setCommunityDescription(results.rows[0].community_desc);
    return community;
};

async function updateCommunityById(communityId, params) {
    var updatedCommunity = new Community();
    console.log(communityId);
    console.log(params);
    const results = await pool.query(constants.UPDATE_COMMUNITY_BY_ID, [params.communityName, params.communityDesc, params.modifiedBy, communityId]);
    updatedCommunity.setId(results.rows[0].id);
    updatedCommunity.setCommunityName(results.rows[0].community_name);
    updatedCommunity.setCommunityDescription(results.rows[0].community_desc);
    return updatedCommunity;
};

async function deleteCommunityById(communityId) {
    console.log("communityId: " + communityId);
    await pool.query(constants.DELETE_COMMUNITY_BY_ID, [communityId]);
};

async function getCommunityRolesByCommunityId(communityId) {
    var communityRoles = new Array();
    const results = await pool.query(constants.GET_COMMUNITY_ROLES_BY_COMMUNITY_ID, [communityId]);
    for (let i = 0; i < results.rows.length; i++) {
        let communityRole = new Role();
        communityRole.setId(results.rows[i].id);
        communityRole.setRoleName(results.rows[i].role_name);
        communityRole.setRoleDescription(results.rows[i].role_desc);
        communityRole.setIsAdmin(results.rows[i].is_admin);
        communityRole.setPrivilegeLevel(results.rows[i].privilege_level);
        communityRoles.push(communityRole);
    }
    return communityRoles;
};

async function getCommunityRoleByCommunityIdAndRoleId(communityId, communityRoleId) {
    var communityRole = new Role();
    const results = await pool.query(constants.GET_COMMUNITY_ROLE_BY_COMMUNITY_ID_AND_ROLE_ID, [communityId, communityRoleId]);
    communityRole.setId(results.rows[0].id);
    communityRole.setRoleName(results.rows[0].role_name);
    communityRole.setRoleDescription(results.rows[0].role_desc);
    communityRole.setIsAdmin(results.rows[0].is_admin);
    communityRole.setPrivilegeLevel(results.rows[0].privilege_level);
    communityRoles.push(communityRole);
};

async function insertCommunityRoleForCommunityId(communityId, params) {
    var role = new Role();
    console.log(params);
    const results = await pool.query(constants.INSERT_COMMUNITY_ROLE_FOR_COMMUNITY_ID, [communityId, params.roleName, params.roleDesc, params.isAdmin, params.privilegeLevel, params.createdBy, params.modifiedBy]);
    role.setId(results.rows[0].id);
    role.setRoleName(results.rows[0].role_name);
    role.setRoleDescription(results.rows[0].role_desc);
    role.setIsAdmin(results.rows[0].is_admin);
    role.setPrivilegeLevel(results.rows[0].privilege_level);
    return role;
};

async function updateCommunityRoleForCommunityId(communityId, communityRoleId, params) {
    var updatedRole = new Role();
    console.log(roleId);
    console.log(params);
    const results = await pool.query(constants.UPDATE_COMMUNITY_ROLE_FOR_COMMUNITY_ID, [params.roleName, params.roleDesc, params.isAdmin, params.privilegeLevel, params.modifiedBy, communityRoleId, communityId]);
    updatedRole.setId(results.rows[0].id);
    updatedRole.setRoleName(results.rows[0].role_name);
    updatedRole.setRoleDescription(results.rows[0].role_desc);
    updatedRole.setIsAdmin(results.rows[0].is_admin);
    updatedRole.setPrivilegeLevel(results.rows[0].privilege_level);
    return updatedRole;
};

async function deleteCommunityRoleForCommunityId(communityId, communityRoleId) {
    await pool.query(constants.DELETE_COMMUNITY_ROLE_FOR_COMMUNITY_ID, [communityRoleId, communityId]);
};

async function getCommunityUsersByCommunityId(communityId) {
    var communityUsers = new Array();
    const results = await pool.query(constants.GET_COMMUNITY_USERS_BY_COMMUNITY_ID, [communityId]);
    for (let i = 0; i < results.rows.length; i++) {
        let communityUser = new User();
        communityUser.setId(results.rows[i].id);
        communityUser.setDisplayName(results.rows[i].display_name);
        communityUsers.push(communityUser);
    }
    return communityRoles;
};

async function getCommunityUserByCommunityIdAndUserId(communityId, userId) {
    var communityUser = new User();
    const results = await pool.query(constants.GET_COMMUNITY_USER_BY_COMMUNITY_ID_AND_USER_ID, [communityId, userId]);
    communityUser.setId(results.rows[0].id);
    communityUser.setDisplayName(results.rows[0].display_name);
    return communityRoles;
};

async function insertCommunityUserForCommunityId(communityId, params) {
    var user = new User();
    console.log(params);
    const results = await pool.query(constants.INSERT_COMMUNITY_USER_FOR_COMMUNITY_ID, [communityId, params.userId, params.roleId, params.createdBy, params.modifiedBy]);
    user.setId(results.rows[0].user_id);
    user.setRoleId(results.rows[0].role_level);
};

async function updateCommunityUserForCommunityId(communityId, userId, params) {
    var updatedUser = new User();
    const results = await pool.query(constants.UPDATE_COMMUNITY_USER_FOR_COMMUNITY_ID[params.role_level, params.modified_by, communityId, userId]);
    updatedUser.setId(results.rows[0].user_id);
    updatedUser.setRoleId(results.rows[0].role_level);
};

async function deleteCommunityUserForCommunityId(communityId, userId) {
    await pool.query(constants.DELETE_COMMUNITY_USER[userId, communityId]);
};

async function getPostsByCommunityId(communityId) {
    var posts = new Array();
    const results = await pool.query(constants.GET_POSTS_BY_COMMUNITY_ID, [communityId]);
    for (let i = 0; i < rows.results.length; i++) {
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

async function getShoutsByCommunityId(communityId) {
    var shouts = new Array();
    const results = await pool.query(constants.GET_SHOUTS_BY_COMMUNITY_ID, [communityId]);
    for (let i = 0; i < results.rows.length; i++) {
        let shout = new Shout();
        shout.setId(rows.results[i].id);
        shout.setShout(rows.results[i].shout);
        shout.setCommunityId(communityId);
        shout.setCreatedBy(rows.results[i].created_by);
        shouts.push(shout);
    }
    return shouts;
};



module.exports = { getCommunities, getCommunityById, insertCommunity, 
    updateCommunityById, deleteCommunityById, getCommunityRolesByCommunityId, 
    getCommunityRoleByCommunityIdAndRoleId, insertCommunityRoleForCommunityId, updateCommunityRoleForCommunityId,
    deleteCommunityRoleForCommunityId, getCommunityUsersByCommunityId, getCommunityUserByCommunityIdAndUserId,
    insertCommunityUserForCommunityId, updateCommunityUserForCommunityId, deleteCommunityUserForCommunityId,
    getPostsByCommunityId, getShoutsByCommunityId
};