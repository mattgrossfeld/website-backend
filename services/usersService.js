const usersRepository = require('../repositories/usersRepository');

const getUserById = async (req, res) => {
        let userId = req.params.userId;
        console.log("Get User By Id: " + userId);

        try {
            var user = await usersRepository.getUserById(userId);
            console.log("User at service: ");
            console.log(user);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({msg: error.message, error: error});
        }

};
  
const insertUser = async (req, res) => {
    let params = req.body;
    try {
            var user = await usersRepository.insertUser(params);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({msg: error.message, error: error});
        }
};
  
const updateUserById = (req, res) => {
    let params = req.body;
    let userId = req.params.userId;
    try {
        var user = usersRepository.updateUserById(userId, params);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};
  
const deleteUserById = (req, res) => {
    let userId = req.params.userId;
    console.log("Delete User By Id: " + userId);
    try {
        usersRepository.deleteUserById(userId);
        let message = "User Id " + userId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getUsers = (req, res) => {
    try {
        var users = usersRepository.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

module.exports = {getUserById, insertUser, updateUserById, deleteUserById, getUsers };