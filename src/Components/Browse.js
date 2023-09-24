import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utils/Constants'
import { addNowPlayingMovies } from '../Utils/MoviesSlice'
import { useDispatch } from 'react-redux'

const Browse = () => {

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () =>{
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS); 
    //Movie list API being called using the OPTIONS
    const json=  await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

 useEffect(() =>{
    
  getNowPlayingMovies();

 },[])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse