import { GET_COUNTRIES , GET_COUNTRIES_NAME , POST_ACTIVITY } from "../actions/indexActions";

let initialState = {
    countries : [],
    DefaultCountry : [],
    activities : [],
}

const RootReducer = (state = initialState , action) =>{
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state , countries: action.payload }
        case GET_COUNTRIES_NAME:
            return {...state , countries: action.payload }
        case POST_ACTIVITY:
            return {...state , activities: action.payload}

        default:
            return state;
    }
}

export default RootReducer