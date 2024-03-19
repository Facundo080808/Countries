const activitiesRouter = require("express").Router();
const {createActivities,getActivities } = require("../Handlers/activities.hand");


activitiesRouter.get("/" , getActivities)
activitiesRouter.post("/create" , createActivities )

module.exports = activitiesRouter;