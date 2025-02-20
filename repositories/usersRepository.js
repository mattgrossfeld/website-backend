const pool = require('../databasePool');
const constants = require('../queries/usersQueries');
const User = require('../models/User');

async function getUserById(userId) {
    var user = new User();
    console.log("userId: " + userId);
    const results = await pool.query(constants.GET_USER_BY_ID, [userId]);
    user.setId(results.rows[0].id);
    user.setDisplayName(results.rows[0].display_name);
    return user;
};

const insertUser = (params) => {
    var user = new User();
    pool.query(constants.INSERT_USER, [params.title, params.body, params.created_tm, params.modified_tm, params.created_by, params.modified_by], (error, results) => {
        if (error) {
            throw error;
        }
        user.setId(results.rows[0].id);
        user.setDisplayName(results.rows[0].display_name);
    });
    return user;
};

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

module.exports = { getUserById, insertUser, getUsers };