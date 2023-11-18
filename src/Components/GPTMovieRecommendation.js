import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux'

const  GPTMovieRecommendation = () => {
 
  const gpt= useSelector(store => store.gpt);

  const {movieResults,movieNames} = gpt;

  if(!movieNames) return null;




  return (


    <div className='bg-black text-white p-3 bg-opacity-70'>
      <div >

        {movieNames.map((movieName,index) =>(
               <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
       
       
      </div>
      
      </div>
  )
}

export default GPTMovieRecommendation;