require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');
const CountryModel = require("./models/CountryModel");
const ActivityModel = require("./models/ActivityModel");



const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countriespi`, {
  logging: false, 
  native: false, 
});





CountryModel(sequelize);
ActivityModel(sequelize);
const {countries,activities} = sequelize.models;
countries.belongsToMany(activities, {through: "country_activity"});
activities.belongsToMany(countries, {through: "country_activity"});



//const basename = path.basename(__filename);
//const modelDefiners = [];
//fs.readdirSync(path.join(__dirname, '/models'))
//.filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//.forEach((file) => {
//  modelDefiners.push(require(path.join(__dirname, '/models', file)));
//});


//modelDefiners.forEach(model => model(sequelize));
//let entries = Object.entries(sequelize.models);
//let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
//sequelize.models = Object.fromEntries(capsEntries);



console.log(sequelize.models);

module.exports = {
   ...sequelize.models,   
   conn: sequelize  }
