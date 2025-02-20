module.exports = Object.freeze({
    GET_USER_BY_ID: ' SELECT * FROM forum.users where id = $1; ',
    GET_USERS: ' SELECT * ROM forum.users; ',
    INSERT_USER: ' INSERT INTO forum.users (first_name, last_name, user_name, display_name, email, role_id, created_by, created_tm, modified_by, modified_tm) values ($firstName, $lastName, $userName, $displayName, $email, $created_by, CURRENT_TIMESTAMP, $modified_by, CURRENT_TIMESTAMP); ',
    UPDATE_USER_BY_ID: ' UPDATE forum.users SET first_name = $firstName, last_name = $lastName, user_name = $userName, display_name = $displayName, email = $email, role_id = $role_id, modified_by = $modifiedBy, modified_tm = CURRENT_TIMESTAMP WHERE id = $id; ',
    DELETE_USER_BY_ID: ' DELETE FROM forum.users WHERE id = $1; '
});