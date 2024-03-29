import React from 'react'

import GPTSearchbar from './GPTSearchbar';
import GPTMovieRecommendation from './GPTMovieRecommendation';

 
const GPTSearch = () => {
  return (

    <div >
      <div className='fixed -z-10'>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='backgroundimage' />
      </div>
       <GPTSearchbar/>
       <GPTMovieRecommendation />
    </div>
   
  )
}

export default GPTSearch