import MainContainer from './MainContainer';
import Header from './Header'
import useNowPlayingMovies from '../Utils/Hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {


  useNowPlayingMovies();
  
 

  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer />

    </div>
  )
}

export default Browse