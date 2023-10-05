import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Constants";
import {  addTopRatedMovies } from "../MoviesSlice";

import { useEffect } from "react";


 const useTopRatedMovies = () => {

    const dispatch = useDispatch();

   const getTopRatedMovies = async () =>{

   const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=2', API_OPTIONS); 
    //Movie list API being called using the OPTIONS
    const json=  await data.json();
    
    dispatch(addTopRatedMovies(json.results));
}

useEffect(() =>{
  
getTopRatedMovies();

},[])}


export default useTopRatedMovies;