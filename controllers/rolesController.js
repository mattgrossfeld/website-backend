const express = require('express');
const rolesService = require('../services/rolesService');

const router = express.Router();

router.get('/:roleId', rolesService.getRoleById);
router.put('/:roleId', rolesService.updateRoleById);
router.delete('/:roleId', rolesService.deleteRoleById);
router.get('/', rolesService.getRoles);
router.post('/', rolesService.insertRole);

module.exports = router;