const pool = require('../databasePool');
const constants = require('../queries/shoutsQueries');
const Shout = require('../models/Shout');

async function getShouts() {
    var shouts = new Array();
    const results = await pool.query(constants.GET_SHOUTS);
    console.log(results.rows);
    for (i = 0; i < results.rows.length; i++) {
        let shout = new Shout();
        shout.setId(results.rows[i].id);
        shout.setShout(results.rows[i].shout);
        shout.setCommunityId(results.rows[i].community_id);
        shouts.push(shout);
    }
    return shouts;
};

async function getShoutById(shoutId) {
    var shout = new Shout();
    console.log("shoutId: " + shoutId);
    const results = await pool.query(constants.GET_SHOUT_BY_ID, [shoutId]);
    shout.setId(results.rows[0].id);
    shout.setShout(results.rows[0].shout);
    shout.setCommunityId(results.rows[0].community_id);
    return shout;
};

async function insertShout(params) {
    var shout = new Shout();
    console.log(params);
    const results = await pool.query(constants.INSERT_SHOUT, [params.shout, params.communityId, params.createdBy, params.modifiedBy]);
    shout.setId(results.rows[0].id);
    shout.setShout(results.rows[0].shout);
    shout.setCommunityId(results.rows[0].community_id);
    return shout;
};

async function updateShoutById(shoutId, params) {
    var updatedShout = new Shout();
    console.log(shoutId);
    console.log(params);
    const results = await pool.query(constants.UPDATE_SHOUT_BY_ID, [params.shout, params.modifiedBy, shoutId]);
    updatedShout.setId(results.rows[0].id);
    updatedShout.setShout(results.rows[0].shout);
    updatedShout.setCommunityId(results.rows[0].community_id);
    return updatedShout;
};

async function deleteShoutById(shoutId) {
    console.log("shoutId: " + shoutId);
    await pool.query(constants.DELETE_SHOUT_BY_ID, [shoutId]);
};

module.exports = { getShoutById, insertShout, getShouts, updateShoutById, deleteShoutById };