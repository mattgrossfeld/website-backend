module.exports = Object.freeze({
    GET_SHOUT_BY_ID: ' SELECT * FROM forum.shouts where id = $1; ',
    GET_SHOUTS: ' SELECT * FROM forum.shouts; ',
    INSERT_SHOUT: ' insert into forum.shouts (shout, community_id, created_by, created_tm, modified_by, modified_tm) values ($1, $2, $3, CURRENT_TIMESTAMP, $4, CURRENT_TIMESTAMP) RETURNING *; ',
    UPDATE_SHOUT_BY_ID: ' UPDATE forum.shouts SET shout = $1, modified_by = $2, modified_tm = CURRENT_TIMESTAMP WHERE ID = $3 RETURNING *; ',
    DELETE_SHOUT_BY_ID: ' DELETE FROM forum.shouts WHERE id = $1; '
});