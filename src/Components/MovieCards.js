import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addDisplayMovie } from '../Utils/MoviesSlice'
import MoviePlaying from './MoviePlaying'
import { useNavigate } from 'react-router-dom'

const MovieCards = ({data}) => {

   const navigate= useNavigate();
  
    const dispatch= useDispatch();
    const handleMovieCardClick = () =>{
      dispatch(addDisplayMovie(data));
      navigate("/watch");
    }
  

  if(!data?.poster_path
    ) return null;
  return (
    <div className='w-44 pr-4 cursor-pointer' onClick={handleMovieCardClick}>
    <img   src={IMG_CDN_URL+data?.poster_path
} ></img>
</div>
  )
}

export default MovieCards