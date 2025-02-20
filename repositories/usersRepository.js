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

const getUsers = () => {
    var users = new Array();
    pool.query(constants.GET_USERS, [userId], (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        for (i = 0; i < results.rows.length; i++) {
            let user = new User();
            user.setId(results.rows[i].id);
            user.setDisplayName(results.rows[i].display_name);
            
        }
    });
    return users;
};

module.exports = { getUserById, insertUser, getUsers };