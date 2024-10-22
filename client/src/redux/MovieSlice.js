import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        trailerMovie:null,
        searchMovieToggle:false
    },
    reducers:{
        addNowPlayingMovies:(state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularmovie:(state,action) => {
            state.popularMovie = action.payload
        },
        addTopRatedMovie:(state,action) => {
            state.topRatedMovie = action.payload
        },
        addUpComingMovie:(state,action) => {
            state.upcomingMovie = action.payload
        },
        addTrailerMovie:(state,action) => {
            state.trailerMovie = action.payload
        },
        toggelSearchMovie:(state) => {
            state.searchMovieToggle = !state.searchMovieToggle
        }

    }
})

export const {addNowPlayingMovies,addPopularmovie,addTopRatedMovie,addUpComingMovie,addTrailerMovie,toggelSearchMovie} = movieSlice.actions 
export default movieSlice.reducer