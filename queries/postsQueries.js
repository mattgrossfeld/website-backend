module.exports = Object.freeze({
    GET_POST_BY_ID: ' SELECT * FROM forum.posts where id = $1; ',
    GET_POSTS: ' SELECT * FROM forum.posts; ',
    INSERT_POST: ' INSERT INTO forum.posts (title, body, community_id, parent_post_id, created_tm, modified_tm, created_by, modified_by) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $5, $6) RETURNING *; ',
    UPDATE_POST_BY_ID: ' UPDATE forum.posts SET title = $1, body = $2, community_id = $3, parent_post_id = $4, modified_tm = CURRENT_TIMESTAMP, modified_by = $5 WHERE ID = $6 RETURNING *; ',
    DELETE_POST_BY_ID: ' DELETE FROM forum.posts WHERE id = $1; '
});