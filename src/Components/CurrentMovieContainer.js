import React from 'react'
import { useSelector } from 'react-redux';
import MoviePlaying from './MoviePlaying';

const CurrentMovieContainer = () => {
    const movieData = useSelector(store => store.movies.displayMovie);
  return (
   <div>
       {
            movieData &&
             <MoviePlaying  data={movieData} />
          }
   </div>
  )
}

export default CurrentMovieContainer