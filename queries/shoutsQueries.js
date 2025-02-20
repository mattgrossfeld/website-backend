module.exports = Object.freeze({
    GET_SHOUT_BY_ID: ' SELECT * FROM forum.shouts where id = $1; ',
    GET_SHOUTS: ' SELECT * FROM forum.shouts; ',
    INSERT_SHOUT: ' insert into forum.shouts (shout, created_by, created_tm, modified_by, modified_tm) values ($1, $2, $3, $4, $5); ',
    UPDATE_SHOUT_BY_ID: ' UPDATE forum.shouts SET shout = $1, created_by = $2, created_tm = $3, modified_by = $4, modified_tm = $5 WHERE ID = $6; ',
    DELETE_SHOUT_BY_ID: ' DELETE FROM forum.shouts WHERE id = $1; '
});