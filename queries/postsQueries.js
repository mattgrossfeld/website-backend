module.exports = Object.freeze({
    GET_POST_BY_ID: ' SELECT * FROM forum.posts where id = $1; ',
    INSERT_POST: ' INSERT INTO forum.posts (title, body, created_tm, modified_tm, created_by, modified_by) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *; ',
    UPDATE_POST_BY_ID: ' UPDATE forum.posts SET title = $1, body = $2, created_tm = $3, modified_tm = $4, created_by = $5, created_tm = $6 WHERE ID = $7; ',
    DELETE_POST_BY_ID: ' DELETE FROM forum.posts WHERE id = $1; '
});