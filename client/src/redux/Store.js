import {configureStore} from '@reduxjs/toolkit'
import UserReducer from "./UserSlice"

const Store = configureStore({
    reducer:{
        app:UserReducer
    }
})


export default Store