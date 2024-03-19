const {activity} = require("../db.js");

const getActivitiesController = async () => await activity.findAll()


const CreateActivity = async (name,dificulty,duration,season) => {
    return await activity.create({name , dificulty , duration , season});
}
module.exports = {CreateActivity , getActivitiesController}