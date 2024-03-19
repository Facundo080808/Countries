const axios = require("axios");

function cleaner(param) {
    return param.map(element =>{
       return{ 
        id:element.cca3,
        name:element.name.official,
        nativeName : element.name.common,
        flag:element.flags.svg,
        capital:element.capital,
        continent:element.region,
        subregion:element.subregion,
        area:element.area,
        population:element.population,
        }
    })
}


async function datosApi(array) {
    try {
        let response = await axios.get("http://localhost:5000/countries");
        let clean = cleaner(response.data);
        return array = [...array , ...clean];
    } catch (error) {
        console.error(error);
    }
}
module.exports = cleaner;