const shoutsRepository = require('../repositories/shoutsRepository');

const getShoutById = async (req, res) => {
        let shoutId = req.params.shoutId;
        console.log("Get Shout By Id: " + shoutId);

        try {
            var shout = await shoutsRepository.getShoutById(shoutId);
            console.log("Shout at service: ");
            console.log(shout);
            res.status(200).json(shout);
        } catch (error) {
            res.status(404).json({msg: error.message, error: error});
        }

};
  
const insertShout = async (req, res) => {
    let params = req.body;
    try {
            var shout = await shoutsRepository.insertShout(params);
            res.status(200).json(shout);
        } catch (error) {
            res.status(400).json({msg: error.message, error: error});
        }
};
  
const updateShoutById = async (req, res) => {
    let params = req.body;
    let shoutId = parseInt(req.params.shoutId);
    try {
        var shout = await shoutsRepository.updateShoutById(shoutId, params);
        res.status(200).json(shout);
    } catch (error) {
        res.status(400).json({msg: error.message, error: error});
    }
};
  
const deleteShoutById = async (req, res) => {
    let shoutId = req.params.shoutId;
    console.log("Delete Shout By Id: " + shoutId);
    try {
        await shoutsRepository.deleteShoutById(shoutId);
        let message = "Shout Id " + shoutId + " deleted successfully. ";
        res.status(201).json({msg: message});
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

const getShouts = async (req, res) => {
    try {
        var shouts = await shoutsRepository.getShouts();
        res.status(200).json(shouts);
    } catch (error) {
        res.status(404).json({msg: error.message, error: error});
    }
};

module.exports = {getShoutById, insertShout, updateShoutById, deleteShoutById, getShouts };