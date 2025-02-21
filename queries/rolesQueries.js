module.exports = Object.freeze({
    GET_ROLE_BY_ID: ' SELECT * FROM forum.roles where id = $1; ',
    GET_ROLES: ' SELECT * FROM forum.roles; ',
    INSERT_ROLE: ' insert into forum.roles (role_name, role_desc, is_admin, privilege_level, created_by, created_tm, modified_by, modified_tm) values ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, $6, CURRENT_TIMESTAMP) RETURNING *; ',
    UPDATE_ROLE_BY_ID: ' UPDATE forum.roles SET role_name = $1, role_desc = $2, is_admin = $3, privilege_level = $4, modified_by = $5, modified_tm = CURRENT_TIMESTAMP WHERE ID = $6 RETURNING *; ',
    DELETE_ROLE_BY_ID: ' DELETE FROM forum.roles WHERE id = $1; '
});