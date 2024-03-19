//const CreateActivity = require("../Controllers/activities.controllers");

const {CreateActivity, getActivitiesController}  = require("../Controllers/activities.controllers");

const getActivities = async (req , res) => {
    const response = await getActivitiesController();
    try {
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json(error.message)
 }
}

const createActivities = async (req , res) => {
    const {name,dificulty,duration,season} = req.body;
    try {
       const response = await CreateActivity(name,dificulty,duration,season);
       res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message)
    }
    
}

module.exports = {
    getActivities , 
    createActivities
};