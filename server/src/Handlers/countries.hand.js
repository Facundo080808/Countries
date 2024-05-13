const {getIdCountriesController, getAllCountriesController, getCountryByNameController, getCountryNameController} = require("../Controllers/countries.controllers");
const getCountriesHandler = async (req, res) => {
  const data = await getAllCountriesController();
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const getIdCountriesHandler = async(req, res) => {
  const id = req.params.id;
  try {
      const response = await getIdCountriesController(id );
      res.status(200).json(response)
    } catch (error) {
      res.status(400).json(error.message)
    }
}
const getNameCountriesHandler = async(req, res) => {
   const name   = req.params.name;
   
   const response = await getCountryNameController(name);
    try {
      res.status(200).json(response)
    } catch (error) {
      res.status(500).json({error:error.message})
    }
}

module.exports = {getCountriesHandler , getIdCountriesHandler , getNameCountriesHandler
};