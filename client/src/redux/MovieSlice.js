import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        trailerMovie:null,
        searchMovieToggle:false,
        dialogBox:false,
        dialogVideoId:null,
        dialogBoxVideo:null
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
        },
        toggleDialogBox:(state,action) => {
            state.dialogBox = action.payload
        },
        setDialogVideoId:(state,action) => {
            state.dialogVideoId = action.payload
        },
        setDialogBoxVideo:(state,action) => {
            state.dialogBoxVideo = action.payload
        }
        

    }
})

export const {addNowPlayingMovies,addPopularmovie,addTopRatedMovie,addUpComingMovie,addTrailerMovie,toggelSearchMovie,toggleDialogBox,setDialogVideoId,setDialogBoxVideo} = movieSlice.actions 
export default movieSlice.reducer