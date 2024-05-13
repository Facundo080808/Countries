//const CreateActivity = require("../Controllers/activities.controllers");

const {CreateActivity, getActivitiesController, DeleteActivity}  = require("../Controllers/activities.controllers");

const getActivities = async (req , res) => {
    const response = await getActivitiesController();
    try {
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json(error.message)
 }
}

const createActivities = async (req , res) => {
    const {name,dificulty,duration,season , country} = req.body;
    try {
       const response = await CreateActivity(name,dificulty,duration,season , country);
       res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message)
    }
}
const DeleteActivityHandler = async (req , res) =>{
    const {id} = req.params;
    try {
        const response = await DeleteActivity(id);
        if (response) {
            res.status(204).send("actividad borrada")
        }
        else{
            res.status(404).send("actiidad no encontrada")
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    getActivities , 
    createActivities,
    DeleteActivityHandler
};