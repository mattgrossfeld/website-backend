const usersRepository = require('../repositories/usersRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../databasePool'); // Add this line

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
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(params.password, salt);
    params.password = hash;
    try {
        var user = await usersRepository.insertUser(params);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};

const updateUserById = async (req, res) => {
    let params = req.body;
    let userId = parseInt(req.params.userId);
    try {
        var user = await usersRepository.updateUserById(userId, params);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};

const deleteUserById = async (req, res) => {
    let userId = req.params.userId;
    console.log("Delete User By Id: " + userId);
    try {
        await usersRepository.deleteUserById(userId);
        let message = "User Id " + userId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getUsers = async (req, res) => {
    try {
        var users = await usersRepository.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const login = async (req, res) => {
    let params = req.body;
    try {
        var user = await usersRepository.login(params.userName);
        bcrypt.compare(params.password, user._password, function(err, result) {
            if (err) {
                console.error("Error during password comparison:", err);
                return res.status(500).json({msg: "Internal server error", error: err});
            }
            if (result) {
                console.log("Login authenticated.");
                const token = jwt.sign({ userName: user.userName }, JWT_SECRET, { expiresIn: '1d' });
                res.cookie('jwt', token, { httpOnly: true, secure: true }); // Ensure consistent cookie name
                res.status(200).json({ user, token });
            } else {
                res.status(401).json({msg: "Invalid username or password."});
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(404).json({msg: error.message, error: error});
    }
};

module.exports = {getUserById, insertUser, updateUserById, deleteUserById, getUsers, login};