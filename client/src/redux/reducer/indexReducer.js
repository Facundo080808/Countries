import { GET_COUNTRIES , GET_COUNTRIES_NAME } from "../actions/indexActions";

let initialState = {
    countries : [],
    DefaultCountry : [],
}

const RootReducer = (state = initialState , action) =>{
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state , countries: action.payload }
        case GET_COUNTRIES_NAME:
            return {...state , countries: action.payload }
        default:
            return state;
    }
}

export default RootReducer