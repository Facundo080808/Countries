import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";


export const getCountries = () => {
   return async (dispatch) => {
    const respose = await axios.get("http://localhost:3005/countries")
    const data = respose.data
    //const firstCards =data.slice(0, 15);
     return dispatch({
        type : "GET_COUNTRIES",
        payload : data
     })
   }   
}   

export const getCountriesByName = (name) => {
   return async (dispatch) =>{
      const response = await axios.get(`http://localhost:3005/countries/${name}`)
      return dispatch({
        type : "GET_COUNTRIES_NAME",
        payload : response.data
      })


   }
}