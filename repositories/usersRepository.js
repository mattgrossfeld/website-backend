const pool = require('../databasePool');
const constants = require('../queries/usersQueries');
const User = require('../models/User');

async function getUsers() {
    var users = new Array();
    const results = await pool.query(constants.GET_USERS);
    console.log(results.rows);
    for (i = 0; i < results.rows.length; i++) {
        let user = new User();
        user.setId(results.rows[i].id);
        user.setDisplayName(results.rows[i].display_name);
        users.push(user);
    }
    return users;
};

async function getUserById(userId) {
    var user = new User();
    console.log("userId: " + userId);
    const results = await pool.query(constants.GET_USER_BY_ID, [userId]);
    user.setId(results.rows[0].id);
    user.setDisplayName(results.rows[0].display_name);
    return user;
};

async function insertUser(params) {
    var user = new User();
    console.log(params);
    const results = await pool.query(constants.INSERT_USER, [params.firstName, params.lastName, params.userName, params.displayName, params.email, params.roleId, params.createdBy, params.modifiedBy]);
    user.setId(results.rows[0].id);
    user.setFirstName(results.rows[0].first_name);
    user.setLastName(results.rows[0].last_name);
    user.setUserName(results.rows[0].user_name);
    user.setDisplayName(results.rows[0].display_name);
    user.setEmail(results.rows[0].email);
    user.setRoleId(results.rows[0].role_id);
    return user;
};

async function updateUserById(userId, params) {
    var updatedUser = new User();
    console.log(userId);
    console.log(params);
    const results = await pool.query(constants.UPDATE_USER_BY_ID, [params.firstName, params.lastName, params.userName, params.displayName, params.email, params.roleId, params.modifiedBy, userId]);
    updatedUser.setId(results.rows[0].id);
    updatedUser.setFirstName(results.rows[0].first_name);
    updatedUser.setLastName(results.rows[0].last_name);
    updatedUser.setUserName(results.rows[0].user_name);
    updatedUser.setDisplayName(results.rows[0].display_name);
    updatedUser.setEmail(results.rows[0].email);
    updatedUser.setRoleId(results.rows[0].role_id);
    return updatedUser;
};

async function deleteUserById(userId) {
    console.log("userId: " + userId);
    await pool.query(constants.DELETE_USER_BY_ID, [userId]);
};

module.exports = { getUserById, insertUser, getUsers, updateUserById, deleteUserById };