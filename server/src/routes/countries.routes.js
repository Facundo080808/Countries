const { getCountryByNameController } = require('../Controllers/countries.controllers');
const { getIdCountriesHandler, getCountriesHandler, getNameCountriesHandler } = require('../Handlers/countries.hand');


const countriesRoutes = require('express').Router();


countriesRoutes.get('/:id' , getIdCountriesHandler );
countriesRoutes.get('/' , getCountriesHandler)
countriesRoutes.get('/country/:name', getNameCountriesHandler)


module.exports = countriesRoutes;