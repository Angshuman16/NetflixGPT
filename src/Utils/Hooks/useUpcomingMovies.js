import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Constants";
import { addUpcomingMovies } from "../MoviesSlice";

import { useEffect } from "react";


 const useUpcomingMovies = () => {
    const dispatch = useDispatch();

   const getUpcomingMovies = async () =>{

   const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=2', API_OPTIONS); 
    //Movie list API being called using the OPTIONS
    const json=  await data.json();
    
    dispatch(addUpcomingMovies(json.results));
}

useEffect(() =>{
  
getUpcomingMovies();

},[])}


export default useUpcomingMovies;