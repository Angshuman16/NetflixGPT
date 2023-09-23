import React, { useEffect } from 'react'
import Login from './login'
import Browse from './Browse'
import Header from './Header'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import Error from './Error'

import {auth} from "../Utils/FirebaseConfig";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/UserSlice'

const Body = () => {

  const dispatch= useDispatch();



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
  ])


  useEffect (() =>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        // User is Signin/SignedUp
           dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
          

      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
    

      }
    });
            
  },[]);


  return (
    <>
         <RouterProvider  router={appRouter}/>
     </>
  )
}

export default Body