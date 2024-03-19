const {getAllCountries , getIdCountriesController} = require("../Controllers/countries.controllers");
const getCountriesHandler = async (req, res) => {
  const data = await getAllCountries();
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const getIdCountriesHandler = async (req, res) => {
  const {id} = req.params;
  try {
      const response = await getIdCountriesController(id );
      res.status(200).json(response)
    } catch (error) {
      res.status(400).json(error.message)
    }
}
//const getNameCountriesHandler = (req, res) => {
  //  let  name  = req.params.name
    //return res.status(200).send("estas en /getCountries/:name y este es tu name : " + name)
//}

module.exports = {getCountriesHandler , getIdCountriesHandler , //getNameCountriesHandler
};