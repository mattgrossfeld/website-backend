const express = require('express');
const rolesService = require('../services/rolesService');

const router = express.Router();

// Single thread
router.get('/:roleId', rolesService.getRoleById);
router.put('/:roleId', rolesService.updateRoleById);
router.delete('/:roleId', rolesService.deleteRoleById);

// Multiple threads
router.get('/', rolesService.getRoles);
router.post('/', rolesService.insertRole);
router.put('/', rolesService.updateRoles);
router.delete('/', rolesService.deleteRoles);

// Role roles
router.get('/:roleId/roles', rolesService.getAllRelatedRoles);
router.get('/:roleId/latestRole', rolesService.getRoleLatestRole);


module.exports = router;