const { getIdCountriesHandler, getCountriesHandler, getNameCountriesHandler } = require('../Handlers/countries.hand');


const countriesRoutes = require('express').Router();


countriesRoutes.get('/:id' , getIdCountriesHandler );
countriesRoutes.get('/' , getCountriesHandler)
countriesRoutes.get('/', (req, res) => {
    
   const name = req.query.name;

    res.send(`Consulta por nombre recibida: ${name}`);
});


module.exports = countriesRoutes;