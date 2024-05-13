const axios = require("axios")
const {countries , activities} = require("../db");
const { where } = require("sequelize");
const { Where } = require("sequelize/lib/utils");
const {Op} = require("sequelize")


const countriesToDB = async ()=>{
    var datos = await(axios.get("http://localhost:5000/countries"));
    
    try {
        for (const element of datos.data) {
           await countries.create({
                id : element.cca3,
                name : element.name.common,
                image_url:element.flags.svg,
                continent:element.region,
                capital:element.capital?.[0] ?? "Unknown Capital",
                subregion:element.subregion,
                area:element.area,
                population:element.population   
            });
            
        }
        console.log("countries created");
    } catch (error) {
    console.log(error);
    }
 }
 
const getAllCountriesController = async()=>{
  let allCountries = await countries.findAll({
    include:{
      model:activities,
    },
  });
  return allCountries;
}

const getIdCountriesController = async(id)=>{
  let allCountries = await countries.findAll();
  if (!isNaN(id) && id > 0 && id < allCountries.length) {
    return allCountries[id - 1]
        }
    if (id.length === 3) {
      
      return await countries.findOne({
        where:{id : id.toUpperCase()},
        include:{
          model: activities
          

        },
      });
    }
    
  }
  const getCountryNameController = async(name)=>{
    return await countries.findOne({where:{name },
      include:activities}
    )
  }



//const getAllCountries = async (req , res) => {
//    let dbData = await country.findAll();
//    let apiData = (await infoApi).data;
//    let data = cleaner(apiData);
//    return data.concat(dbData);
//}
   
//const getIdCountriesController = async (id)=>{
//    const response = await infoApi;
    //const Data = response.data;
 //   const arrayData = cleaner(response.data);
 //   if (!isNaN(id) && id >= 0 && id < arrayData.length) {
 //         return arrayData[id - 1]
 //       }
    
 //   else if (id.length === 3) return arrayData.filter((country)=> country.id === id);
   // else  {return await country.findByPK(id);}
    
 //  else if (id.length > 3) {
 //   const idLower = id.toLowerCase();
 //   const nameFilter = arrayData.filter((country)=> country.name.toLowerCase() === idLower || country.nativeName.toLowerCase() === idLower);
    //let DBName = await country.findall({where : {name : id}});
  //  return [ ...nameFilter];
   //}  
//}




module.exports = { countriesToDB , getAllCountriesController,getIdCountriesController, getCountryNameController}
