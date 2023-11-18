import MainContainer from './MainContainer';
import Header from './Header'
import useNowPlayingMovies from '../Utils/Hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Utils/Hooks/usePopularMovies';
import useTopRatedMovies from '../Utils/Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Utils/Hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showgptSearch= useSelector(store =>store.gpt.showgptSearch)


  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
 

  return (
    <div>
      <Header/>

      {
        showgptSearch? 
        (<GPTSearch />):(

          <>
          <MainContainer />
          <SecondaryContainer />
          
          </>
        )
      }
      
      

    </div>
  )
}

export default Browse