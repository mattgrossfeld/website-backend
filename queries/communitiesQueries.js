module.exports = Object.freeze({
    //General Communities
    GET_COMMUNITY_BY_ID: ' SELECT * FROM forum.communities where id = $1; ',
    GET_COMMUNITIES: ' SELECT * FROM forum.communities; ',
    INSERT_COMMUNITY: ' insert into forum.communities (community_name, community_desc, created_tm, created_by, modified_by, modified_tm) values ($1, $2, CURRENT_TIMESTAMP, $3, $4, CURRENT_TIMESTAMP) RETURNING *; ',
    UPDATE_COMMUNITY_BY_ID: ' UPDATE forum.communities SET community_name = $1, community_desc = $2, modified_by = $3, modified_tm = CURRENT_TIMESTAMP WHERE ID = $4 RETURNING *; ',
    DELETE_COMMUNITY_BY_ID: ' DELETE FROM forum.communities WHERE id = $1; ',
    
    //Community Roles
    GET_COMMUNITY_ROLES_BY_COMMUNITY_ID: `
    SELECT c.id as community_id, c.community_name, c.community_desc, cr.* FROM forum.community_roles cr
    JOIN forum.communities c on c.id = cr.community_id
    WHERE cr.community_id = $1;  `,
    GET_COMMUNITY_ROLE_BY_COMMUNITY_ID_AND_ROLE_ID: `
    SELECT c.id as community_id, c.community_name, c.community_desc, cr.* FROM forum.community_roles cr
    JOIN forum.communities c on c.id = cr.community_id
    WHERE cr.community_id = $1 and cr.id = $2;  `,
    INSERT_COMMUNITY_ROLE_FOR_COMMUNITY_ID: 'INSERT INTO forum.community_roles (community_id, community_role_name, community_role_desc, is_admin, privilege_level, created_by, created_tm, modified_by, modified_tm) values ($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, $7, CURRENT_TIMESTAMP) RETURNING *; ',
    UPDATE_COMMUNITY_ROLE_FOR_COMMUNITY_ID: ' UPDATE forum.community_roles SET community_role_name = $1, community_role_desc = $2, is_admin = $3, privilege_level = $4, modified_by = $5, modified_tm = CURRENT_TIMESTAMP WHERE id = $6 and community_id = $7 RETURNING *; ',
    DELETE_COMMUNITY_ROLE_FOR_COMMUNITY_ID: ' DELETE FROM forum.community_roles WHERE id = $1 AND community_id = $2; ',

    //Community Users
    GET_COMMUNITY_USERS_BY_COMMUNITY_ID: `
    select c.community_name, c.community_desc, u.first_name, u.last_name, u.user_name, cr.community_role_name, cr.community_role_desc, cr.is_admin, cr.privilege_level, cu.* from forum.community_users cu
    join forum.communities c on c.id = cu.community_id
    join forum.community_roles cr on cr.id = cu.role_level
    join forum.users u on u.id = cu.user_id
    where c.id = $1;`,
    GET_COMMUNITY_USER_BY_COMMUNITY_ID_AND_USER_ID: `
    select c.community_name, c.community_desc, u.first_name, u.last_name, u.user_name, cr.community_role_name, cr.community_role_desc, cr.is_admin, cr.privilege_level, cu.* from forum.community_users cu
    join forum.communities c on c.id = cu.community_id
    join forum.community_roles cr on cr.id = cu.role_level
    join forum.users u on u.id = cu.user_id
    where c.id = $1 AND cu.user_id = $2; `,
    INSERT_COMMUNITY_USER_FOR_COMMUNITY_ID: 'insert into forum.community_users (community_id, user_id, role_level, created_tm, created_by, modified_by, modified_tm) values ($1, $2, $3, CURRENT_TIMESTAMP, $4, $5, CURRENT_TIMESTAMP) RETURNING *; ',
    UPDATE_COMMUNITY_USER_FOR_COMMUNITY_ID: 'UPDATE forum.community_users set role_level = $1, modified_tm = CURRENT_TIMESTAMP, modified_by = $2 WHERE community_id = $3 and user_id = $4 RETURNING *; ',
    DELETE_COMMUNITY_USER: ' DELETE FROM forum.community_users WHERE user_id = $1 and community_id = $2; ',

    GET_POSTS_BY_COMMUNITY_ID: ' SELECT * FROM forum.posts WHERE community_id = $1; ',
    GET_SHOUTS_BY_COMMUNITY_ID: ' SELECT * FROM forum.shouts WHERE community_id = $1; '
});