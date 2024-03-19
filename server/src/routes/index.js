const  Router  = require("express");
const countriesRoutes = require("./countries.routes");
const activitiesRoutes = require("./activities.routes");


const router = Router();
router.use("/countries", countriesRoutes)
router.use("/activities" , activitiesRoutes)



module.exports = router;
