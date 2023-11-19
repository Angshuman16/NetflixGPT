import { createSlice } from "@reduxjs/toolkit";



const MoviesSlice = createSlice ({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo: null,
        displayMovie:null,
        
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
        addUpcomingMovies:(state,action) =>{
            state.UpcomingMovies= action.payload;
        },
        addtrailerVideo:(state,action) =>{
            state.trailerVideo=action.payload;
            
        },
        addDisplayMovie:(state,action) =>{
            state.displayMovie=action.payload;
        }
    }
})



export const { addNowPlayingMovies, addtrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addDisplayMovie } = MoviesSlice.actions;

export default MoviesSlice.reducer;
