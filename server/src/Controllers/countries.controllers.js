const axios = require("axios")
const {country} = require("../db");
const cleaner = require("../resources");

var infoApi = axios.get("http://localhost:5000/countries");


const getAllCountries = async (req , res) => {
    let dbData = await country.findAll();
    let apiData = (await infoApi).data;
    
    let data = cleaner(apiData);

    return data.concat(dbData);
}
   
const getIdCountriesController = async (id)=>{
    const response = await infoApi;
    //const Data = response.data;
    const arrayData = cleaner(response.data);
    if (!isNaN(id) && id >= 0 && id < arrayData.length) {
          return arrayData[id - 1]
        }
    
    else if (id.length === 3) return arrayData.filter((country)=> country.id === id);
   // else  {return await country.findByPK(id);}
    
   else if (id.length > 3) {
    const idLower = id.toLowerCase();
    const nameFilter = arrayData.filter((country)=> country.name.toLowerCase() === idLower || country.nativeName.toLowerCase() === idLower);
    //let DBName = await country.findall({where : {name : id}});
    return [ ...nameFilter];
   }

   
    
}

const getCountryByNameController = async (name) =>{


}



module.exports = {getAllCountries ,getIdCountriesController}
