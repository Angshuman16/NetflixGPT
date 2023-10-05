import { createSlice } from "@reduxjs/toolkit";



const MoviesSlice = createSlice ({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies= action.payload;
        },
        addPopularMovies:(state,action) =>{
            state.popularMovies= action.payload;
        },
        addTopRatedMovies:(state,action) =>{
            state.topRatedMovies= action.payload;
        },
        addtrailerVideo:(state,action) =>{
            state.trailerVideo=action.payload;
            
        }
    }
})



export const { addNowPlayingMovies, addtrailerVideo,addPopularMovies,addTopRatedMovies } = MoviesSlice.actions;

export default MoviesSlice.reducer;
