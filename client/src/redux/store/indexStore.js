import {configureStore} from '@reduxjs/toolkit';
import countryReducer from '../reducer/indexReducer'

export const store = configureStore({reducer:{
    countries : countryReducer
}})


