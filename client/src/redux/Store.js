import {configureStore} from '@reduxjs/toolkit'
import UserReducer from "./UserSlice"
import MovieReducer from "./MovieSlice"

const Store = configureStore({
    reducer:{
        app:UserReducer,
        movie:MovieReducer
    }
})


export default Store