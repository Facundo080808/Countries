import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
import { getAllCountries, post, setError, getName} from "../reducer/indexReducer";

export const GET_COUNTRIES = createAction("GET_COUNTRIES");
export const GET_COUNTRIES_NAME = createAction("GET_COUNTRIES_NAME");
export const POST_ACTIVITY= createAction("POST_ACTIVITY");
export const Z_A = createAction("Z_A")


export const getCountries = () => {
   return async (dispatch) => {
      try {
         const respose = await axios.get("http://localhost:3005/countries")
         let data = respose.data;
         
          return dispatch(getAllCountries(data))
         
      } catch (error) {
         console.log(setError(error.message));
      }
   }   
}   

export const getCountriesByName = (name) => {
   return async (dispatch) =>{
      try {
         
      const response = await axios.get(`http://localhost:3005/countries/country/${name}`)
      return dispatch(getName(response))
      } catch (error) {
         console.log(setError(error.message));
      }
   }
}
export const postActivity = (activity) =>{
   return async(dispatch) =>{
      try {
         const formattedActivity = {
            ...activity,
            name: activity.name.charAt(0).toUpperCase() + activity.name.slice(1),
        };
        const response = await axios.post("http://localhost:3005/activities/create" , formattedActivity)
        const data = response.data;
        console.log("funciono" + data);
        return dispatch(post(data))
      } catch (error) {
         console.log(error.message)
      }
  }
}
export const orderZA =()=>{
   return async(dispatch)=>{
      try {
         const respose = await axios.get("http://localhost:3005/countries")
         let data = respose.data;

         const sorted = data.sort((a,b)=>{
            console.log("exito");
            return b.name.localeCompare(a.name)
         })
         return dispatch(Z_A(sorted))
      } catch (error) {
         console.log(error.message);
      }
   }
}


