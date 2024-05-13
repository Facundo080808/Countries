const { where, Model } = require("sequelize");
const {activities , countries} = require("../db.js");

const getActivitiesController = async () => await activities.findAll({
    include :[countries]
})


const CreateActivity = async (name,dificulty,duration,season, country) => {
    const activity= await activities.create({name , dificulty , duration , season});
    if (country && country.length > 0) {
       const countri = await countries.findAll({
            where:{name : country},
            include:activities
        })
        await activity.addCountries(countri);    
    }
    return activity;    
}

const DeleteActivity = async (id)=>{
    const activity =await activities.destroy({where : {id}})
    if (id) {
        return await activity;
    }
    else{
        console.log("actividad no encontrada");
    }
    
}
module.exports = {CreateActivity , getActivitiesController,DeleteActivity}