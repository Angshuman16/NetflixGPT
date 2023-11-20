
import Login from './login'
import Browse from './Browse'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Error from './Error'

import CurrentMovieContainer from './CurrentMovieContainer'





const Body = () => {


  const appRouter = createBrowserRouter ([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/browse",
      element:<Browse />
    },
    {
      path:"/error",
      element:<Error />
    },
    {
      path:"/watch",
      element:<CurrentMovieContainer />
    }
   
  ])



  return (
    <div>
         <RouterProvider  router={appRouter}/>
     </div>
  )
}

export default Body