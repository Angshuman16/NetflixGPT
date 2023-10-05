import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({title,movies}) => {

   console.log(movies);
  return (
    
    <div className='pt-3 px-2 '>
         <h1 className='text-white text-2xl font-bold py-3'>{title}</h1> 

        <div className="flex overflow-x-scroll ">
        <div className='flex'>
          {movies &&
             
             movies.map(movie => <MovieCards key={movie.id} posterPath={movie.poster_path}/>)
          
          }
          
        </div>
        </div>
    </div>
  )
}

export default MovieList