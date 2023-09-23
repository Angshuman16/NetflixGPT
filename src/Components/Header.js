import { signOut } from 'firebase/auth';
import {auth} from "../Utils/FirebaseConfig";
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate= useNavigate();
  const user= useSelector(store =>store.user)

  const handleSignout = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
    
  }
  return (
    
    <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10  flex justify-between'>
       <img  className='w-[14rem]' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
    

    <div className='flex p-2'>
           <img className='w-12 h-12' src={user?.photoURL}></img>

           <button className='m-3 p-2 bg-slate-500 text-white h-10 rounded-xl hover:bg-black  ' onClick={handleSignout}>SignOut</button>
    </div>

    </div>
    
    
  )
}

export default Header