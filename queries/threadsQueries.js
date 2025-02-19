module.exports = Object.freeze({
    GET_THREAD_BY_ID: ' SELECT * FROM forum.threads where id = $1; ',
    INSERT_THREAD: ' INSERT INTO forum.threads (title, body, created_tm, modified_tm, created_by, modified_by) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *; ',
    UPDATE_THREAD_BY_ID: ' UPDATE forum.threads SET title = $1, body = $2, created_tm = $3, modified_tm = $4, created_by = $5, created_tm = $6 WHERE ID = $7; ',
    DELETE_THREAD_BY_ID: ' DELETE FROM forum.threads WHERE id = $1; '
});