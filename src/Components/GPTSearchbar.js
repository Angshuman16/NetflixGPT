import React, { useRef } from 'react'
import openai from '../Utils/openai';
import { API_OPTIONS } from '../Utils/Constants';
import { addgptMovieResult } from '../Utils/gptSlice';
import { useDispatch } from 'react-redux';

const GPTSearchbar = () => {


  const dispatch= useDispatch();


  const searchMovieTMDB = async (movie) => {
    
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
    API_OPTIONS);


    const json= await data.json();


    return json.results;
  }


  const handlegptSearchClick = async () =>{
  
    console.log(searchText.current.value);

    // After we are done picking up the values for searching with keywords, we are ready to call the OPENAi API


    const gptQuery= "Act as a Movie Recommendation system and suggest some movies for the query:"+ searchText.current.value +"Only give me top 5 movies, comma separated like the Example Result given ahead. Example Result: Gadar, Sholay, Mardani, Golmal, Dilwale";

     const gptResults =  await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',

    });


    console.log(gptResults?.choices?.[0]?.message.content);



    const gptMovies = gptResults?.choices?.[0]?.message.content.split(",");



    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));



    const tmdbResult = await Promise.all(promiseArray);


    console.log(tmdbResult);


    dispatch(addgptMovieResult({movieNames: gptMovies, movieResults: tmdbResult}));





  };
  
  const searchText= useRef(null);


  return (
    <div className=' pt-[10%] flex justify-center'>

  

        <form className=' m-2 w-1/2 bg-black grid grid-cols-12'
          
          onSubmit={(e)=>e.preventDefault()}
        >


            <input type='text'
             ref={searchText}
             className='p-4 m-4
              rounded-lg
               bg-slate-200 col-span-9' placeholder='What is in your Mind?'></input>

            <button className='bg-red-500 col-span-3 text-white p-2 m-4 rounded-lg hover:bg-red-700 '
            onClick={handlegptSearchClick}
            
            >Search</button>
        </form>
    </div>
  )
}

export default GPTSearchbar