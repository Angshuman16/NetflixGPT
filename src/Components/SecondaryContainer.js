import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {


  const movies= useSelector(store=>store.movies);
  
  return (
    <div>
      <MovieList  title={"NowPlaying Movies"} movies={movies.nowPlayingMovies} />
      
      </div>
  )
}
//MovieList- Popular
//   MovieCards 
//MovieList- Trending
//MovieList- Genre

export default SecondaryContainer