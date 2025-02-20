module.exports = Object.freeze({
    GET_USER_BY_ID: ' SELECT * FROM forum.users where id = $1; ',
    GET_USERS: ' SELECT * FROM forum.users; ',
    INSERT_USER: ' INSERT INTO forum.users (first_name, last_name, user_name, display_name, email, role_id, created_by, created_tm, modified_by, modified_tm) values ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, $8, CURRENT_TIMESTAMP) RETURNING *; ',
    UPDATE_USER_BY_ID: ' UPDATE forum.users SET first_name = $firstName, last_name = $lastName, user_name = $userName, display_name = $displayName, email = $email, role_id = $role_id, modified_by = $modifiedBy, modified_tm = CURRENT_TIMESTAMP WHERE id = $id; ',
    DELETE_USER_BY_ID: ' DELETE FROM forum.users WHERE id = $1; '
});