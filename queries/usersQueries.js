module.exports = Object.freeze({
    GET_USER_BY_ID: ' SELECT * FROM forum.users where id = $1; ',
    GET_USERS: ' SELECT * FROM forum.users; ',
    INSERT_USER: ' INSERT INTO forum.users (first_name, last_name, user_name, display_name, email, role_id, created_by, created_tm, modified_by, modified_tm) values ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, $8, CURRENT_TIMESTAMP) RETURNING *; ',
    UPDATE_USER_BY_ID: ' UPDATE forum.users SET first_name = $1, last_name = $2, user_name = $3, display_name = $4, email = $5, role_id = $6, modified_by = $7, modified_tm = CURRENT_TIMESTAMP WHERE id = $8 RETURNING *; ',
    DELETE_USER_BY_ID: ' DELETE FROM forum.users WHERE id = $1; '
});