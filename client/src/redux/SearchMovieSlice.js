import { createSlice } from "@reduxjs/toolkit";


const searchMovieSlice = createSlice({
    name:'searchMovie',
    initialState:{
        searchMovieName:null,
        searchMovieData:null,
        loading:false
    },
    reducers:{
        setMovieNameAndMovieData:(state,action) => {
            const {movieName,movieData} = action.payload 
            state.searchMovieName = movieName
            state.searchMovieData = movieData
        },
        setLoadingStatus:(state,action) => {
            state.loading = action.payload
        }
    }
})

export const {setMovieNameAndMovieData,setLoadingStatus} = searchMovieSlice.actions 
export default searchMovieSlice.reducer