module.exports = Object.freeze({
    GET_ROLE_BY_ID: ' SELECT * FROM forum.roles where id = $1; ',
    GET_ROLES: ' SELECT * FROM forum.roles; ',
    INSERT_ROLE: ' insert into forum.roles (role_name, role_desc, is_admin, privilege_level, created_by, created_tm, modified_by, modified_tm) values ($1, $2, $3, $4, $5, $6, $7, $8); ',
    UPDATE_ROLE_BY_ID: ' UPDATE forum.roles SET role_name = $1, role_desc = $2, is_admin = $3, privilege_level = $4, created_by = $5, created_tm = $6, modified_by = $7, modified_tm = $8 WHERE ID = $9; ',
    DELETE_ROLE_BY_ID: ' DELETE FROM forum.roles WHERE id = $1; '
});