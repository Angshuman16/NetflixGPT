import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";
import moviesReducer from "./MoviesSlice";


import gptReducer from "./gptSlice";

const appStore= configureStore({
    reducer:{
        user:UserSlice,
        movies:moviesReducer,
        gpt:gptReducer,
    }
})

export default appStore;