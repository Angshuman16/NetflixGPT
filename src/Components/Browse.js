import MainContainer from './MainContainer';
import Header from './Header'
import useNowPlayingMovies from '../Utils/Hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Utils/Hooks/usePopularMovies';
import useTopRatedMovies from '../Utils/Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Utils/Hooks/useUpcomingMovies';

const Browse = () => {


  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
 

  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer />

    </div>
  )
}

export default Browse