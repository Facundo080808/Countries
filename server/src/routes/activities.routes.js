const activitiesRouter = require("express").Router();
const {createActivities,getActivities, DeleteActivityHandler } = require("../Handlers/activities.hand");


activitiesRouter.get("/" , getActivities)
activitiesRouter.post("/create" , createActivities )
activitiesRouter.delete('/:id', DeleteActivityHandler)
module.exports = activitiesRouter;