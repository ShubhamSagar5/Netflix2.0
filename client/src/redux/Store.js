import {configureStore} from '@reduxjs/toolkit'
import UserReducer from "./UserSlice"
import MovieReducer from "./MovieSlice"
import searchMovieReducer from './SearchMovieSlice'

const Store = configureStore({
    reducer:{
        app:UserReducer,
        movie:MovieReducer,
        searchMovie:searchMovieReducer
    }
})


export default Store