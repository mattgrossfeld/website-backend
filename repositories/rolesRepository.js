const pool = require('../databasePool');
const constants = require('../queries/rolesQueries');
const Role = require('../models/Role');

async function getRoles() {
    var roles = new Array();
    const results = await pool.query(constants.GET_ROLES);
    for (i = 0; i < results.rows.length; i++) {
        let role = new Role();
        role.setId(results.rows[i].id);
        role.setRoleName(results.rows[i].role_name);
        role.setRoleDescription(results.rows[i].role_desc);
        role.setIsAdmin(results.rows[i].is_admin);
        role.setPrivilegeLevel(results.rows[i].privilege_level);
        roles.push(role);
    }
    return roles;
};

async function getRoleById(roleId) {
    var role = new Role();
    console.log("roleId: " + roleId);
    const results = await pool.query(constants.GET_ROLE_BY_ID, [roleId]);
    role.setId(results.rows[0].id);
    role.setRoleName(results.rows[0].role_name);
    role.setRoleDescription(results.rows[0].role_desc);
    role.setIsAdmin(results.rows[0].is_admin);
    role.setPrivilegeLevel(results.rows[0].privilege_level);
    return role;
};

async function insertRole(params) {
    var role = new Role();
    console.log(params);
    const results = await pool.query(constants.INSERT_ROLE, [params.roleName, params.roleDesc, params.isAdmin, params.privilegeLevel, params.createdBy, params.modifiedBy]);
    role.setId(results.rows[0].id);
    role.setRoleName(results.rows[0].role_name);
    role.setRoleDescription(results.rows[0].role_desc);
    role.setIsAdmin(results.rows[0].is_admin);
    role.setPrivilegeLevel(results.rows[0].privilege_level);
    return role;
};

async function updateRoleById(roleId, params) {
    var updatedRole = new Role();
    console.log(roleId);
    console.log(params);
    const results = await pool.query(constants.UPDATE_ROLE_BY_ID, [params.roleName, params.roleDesc, params.isAdmin, params.privilegeLevel, params.modifiedBy, roleId]);
    updatedRole.setId(results.rows[0].id);
    updatedRole.setRoleName(results.rows[0].role_name);
    updatedRole.setRoleDescription(results.rows[0].role_desc);
    updatedRole.setIsAdmin(results.rows[0].is_admin);
    updatedRole.setPrivilegeLevel(results.rows[0].privilege_level);
    return updatedRole;
};

async function deleteRoleById(roleId) {
    console.log("roleId: " + roleId);
    await pool.query(constants.DELETE_ROLE_BY_ID, [roleId]);
};

module.exports = { getRoleById, insertRole, getRoles, updateRoleById, deleteRoleById };