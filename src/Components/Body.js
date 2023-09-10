import React from 'react'
import Login from './login'
import Browse from './Browse'
import Header from './Header'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

  const appRouter = createBrowserRouter ([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/browse",
      element:<Browse />
    }
  ])
  return (
    <>
    <RouterProvider  router={appRouter}/>
     </>
  )
}

export default Body