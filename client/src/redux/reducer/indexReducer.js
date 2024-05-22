import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    countries : [],
    filtredCountries : [],
    activities : [],
    loading: false,
    error:null
}


const Reducer = createSlice({
    name: 'countries',
    initialState,
    reducers:{
        getName : (state,action)=>{
            state.filtredCountries = action.payload;
            state.loading = false;
            state.error =null;
        },
        getAllCountries : (state , action)=>{
            state.countries = action.payload
            state.loading = false;
            state.error =null;
        },
        post : (state, action)=>{
            state.activities = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading : (state , action)=> {
            state.loading = true;
        },
        setError : (state, action)=>{
            state.loading = false;
            state.error = action.payload;
         },
    }
        
        
})

export const { getAllCountries, setLoading, setError, post, getName} = Reducer.actions;
export default Reducer.reducer;