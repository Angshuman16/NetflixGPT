import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";
import moviesReducer from "./MoviesSlice";

const appStore= configureStore({
    reducer:{
        user:UserSlice,
        movies:moviesReducer,
    }
})

export default appStore;