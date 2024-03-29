import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../Utils/FirebaseConfig";
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/UserSlice'

import { toggleGptSearchView } from '../Utils/gptSlice';




const Header = () => {

  const dispatch= useDispatch();


  const navigate= useNavigate();
  const user= useSelector(store =>store.user)

  const gptShow= useSelector(store =>store.gpt)




  const handleGPTSearchClick = () =>{
    
    dispatch(toggleGptSearchView());


  }

  const handleSignout = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
    
  }

  useEffect (() =>{

   const unSubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        // User is Signin/SignedUp
         
           dispatch(addUser(
            {uid:uid, 
            email:email,
             displayName:displayName,
             photoURL:photoURL}));


             navigate("/browse")
          

      } else {
        // User is signed out
        // ...

        dispatch(removeUser());

        navigate("/");
    

      }
    });

    return () =>{
       unSubscribe();
    }
            
  },[]);


  return (
    
  <div className='absolute px-8 w-screen py-1 h-[6rem] bg-gradient-to-b from-black z-10  flex justify-between'>
       <img  className='w-[12rem]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
    
   { user &&
   
   (
  
   
   <div className='flex p-2'>
    {gptShow.showgptSearch?(<button className='p-2 m-3 h-10 bg-purple-800 text-white rounded-xl' onClick={handleGPTSearchClick}>Home Page</button>):(<button className='p-2 m-3 h-10 bg-purple-800 text-white rounded-xl' onClick={handleGPTSearchClick}>GPT Search</button>)}
            {/* <img className='w-12 h-12' src={user?.photoURL}></img> */}

          
           <button className='m-3 p-2 h-10 bg-purple-800 text-white  rounded-xl  ' onClick={handleSignout}>Sign Out</button>
    </div>
    )
    

   }

    </div>
    
    
  )
}

export default Header