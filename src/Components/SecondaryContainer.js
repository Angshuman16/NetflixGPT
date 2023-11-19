import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'





const SecondaryContainer = () => {


  const movies= useSelector(store=>store.movies);
  
  return (
    <div className=' bg-black  '>

     <div className='-mt-52 pl-10 relative z-20 '>
      <MovieList  title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
      <MovieList  title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList  title={"BlockBuster Movies"} movies={movies.topRatedMovies} />
      <MovieList  title={"UpComing Movies"} movies={movies.UpcomingMovies} />
     

      </div>
      
      </div>
  )
}
//MovieList- Popular
//   MovieCards 
//MovieList- Trending
//MovieList- Genre

export default SecondaryContainer