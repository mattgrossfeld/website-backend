const rolesRepository = require('../repositories/rolesRepository');

const getRoleById = async (req, res) => {
        let roleId = req.params.roleId;
        console.log("Get Role By Id: " + roleId);

        try {
            var role = await rolesRepository.getRoleById(roleId);
            console.log("Role at service: ");
            console.log(role);
            res.status(200).json(role);
        } catch (error) {
            res.status(404).json({msg: error.message, error: error});
        }

};
  
const insertRole = async (req, res) => {
    let params = req.body;
    try {
            var role = await rolesRepository.insertRole(params);
            res.status(200).json(role);
        } catch (error) {
            res.status(400).json({msg: error.message, error: error});
        }
};
  
const updateRoleById = async (req, res) => {
    let params = req.body;
    let roleId = parseInt(req.params.roleId);
    try {
        var role = await rolesRepository.updateRoleById(roleId, params);
        res.status(200).json(role);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};
  
const deleteRoleById = async (req, res) => {
    let roleId = req.params.roleId;
    console.log("Delete Role By Id: " + roleId);
    try {
        await rolesRepository.deleteRoleById(roleId);
        let message = "Role Id " + roleId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getRoles = async (req, res) => {
    try {
        var roles = await rolesRepository.getRoles();
        res.status(200).json(roles);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

module.exports = {getRoleById, insertRole, updateRoleById, deleteRoleById, getRoles };