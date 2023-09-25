import React from 'react'
import VideoDetails from './VideoDetails'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    
    const movies= useSelector((store) => store.movies?.nowPlayingMovies);


    if(movies == null) return;  // if my movies is null then return from there 

    const MainMovie= movies[0];

    console.log(MainMovie);

    const {original_title, overview} = MainMovie;






  return (
    <div>
        <VideoDetails  title={original_title} overview={overview}/>
        <VideoBackground />
        </div>
  )
}

export default MainContainer