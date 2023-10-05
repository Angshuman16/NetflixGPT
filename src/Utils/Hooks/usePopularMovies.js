import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Constants";
import {  addPopularMovies } from "../MoviesSlice";

import { useEffect } from "react";


 const usePopularMovies = () => {

    const dispatch = useDispatch();

    
   const getPopularMovies = async () =>{
   const data= await fetch('https://api.themoviedb.org/3/movie/popular?&page=2', API_OPTIONS); 
    //Movie list API being called using the OPTIONS
    const json=  await data.json();
    
    dispatch(addPopularMovies(json.results));
}

useEffect(() =>{
  
getPopularMovies();

},[])}


export default usePopularMovies;