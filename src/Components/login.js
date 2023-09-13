import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from '../Utils/Validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Utils/FirebaseConfig";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const[isSigninForm,setSigninForm] = useState(true);

  const [errorMessage, seterrorMessage] = useState(null);

  const email=useRef(null);
  const password= useRef(null);
  const navigate= useNavigate();

  const handleButtonClick = () =>{ 

    // validation of Data
        
           
           const message=   checkValidateData(email.current.value,password.current.value);
          seterrorMessage(message);

          if(message) return   //if there will be a problem with my message that is there is a error message then the it would return the message if not then we will get the sign in/sigiup logic.

          //We will be writing the signup/signin logic
          if(!isSigninForm)
          {
                 //signup logic
                 createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                 .then((userCredential) => {
                 
                   const user = userCredential.user;
                   console.log(user);
                   navigate("/browse");
                   
                 })
                 .catch((error) => {
                   const errorCode = error.code;
                   const errorMessage = error.message;
                   seterrorMessage(errorCode + "----" + errorMessage);
                   // ..
                 });

          }
          else{
                    //signin logic

     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
    // Signed in 
         const user = userCredential.user;
         console.log(user);
        navigate("/browse");
    // ...
        })
       .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;

       seterrorMessage(errorCode+"---"+ errorMessage);

       });


          } 

    //Now moving to Signin/Signup Page Accordingly

          
          
          }


  const ToggleSigninForm = () =>{

    setSigninForm(!isSigninForm);

  }
  return (
    <div>
         <Header />
            <div className='absolute'>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='backgroundimage' />
            </div>
            <form  onSubmit={(e) =>e.preventDefault()} className='absolute bg-black p-12 mt-40 mx-auto right-0 left-0  w-3/12 rounded-lg shadow-lg bg-opacity-80'>

                <h2 className='text-white text-4xl py-4 font-bold pb-5 m-2 mb-4'>{isSigninForm?"Sign In":"Sign Up"}</h2>

                { !isSigninForm && (<input type='text'
                 placeholder='Enter Name' 
                 className='p-3 m-2 w-[18rem] bg-gray-700 rounded-lg text-white  '>
                  

                 </input>)}


                <input type='text' ref={email} placeholder='Email or phone number' className='p-3 m-2 w-[18rem] bg-gray-700  rounded-lg text-white  ' 
                 ></input>
               


                <input  ref={password} type='password' placeholder='Password' className='p-3 m-2  w-[18rem]  bg-gray-700  rounded-lg text-white ' ></input>
                <p className='text-red-500 ml-2 p-2 text-lg '> {errorMessage} </p> 

                <button className='p-3 my-8 m-2 bg-red-500 text-white rounded-lg w-[18rem] placeholder:text-2xl ' onClick={handleButtonClick}>{isSigninForm?"Signin":"Signup"}</button>

                <div className='flex'>
                    <input type='checkbox' className='ml-4'></input>
                    <h3 className='text-white p-2 text-xs  cursor-pointer'>Remember Me</h3>

                    <h4 className=' p-2 ml-[5rem] text-xs text-white  cursor-pointer'>Need Help?</h4>


                </div>


                {isSigninForm?<div className='flex'>
                <h2 className='text-white ml-4  mt-6'>New to Netflix?</h2>
                <p className='text-white mt-6 text-sm pl-2 hover:underline cursor-pointer' onClick={ToggleSigninForm}>Sign up now</p>
                </div>:<div className='flex'>
                <h2 className='text-white ml-4  mt-6'>Already a User?</h2>
                <p className='text-white mt-6 text-sm pl-2 hover:underline cursor-pointer' onClick={ToggleSigninForm}>Sign in now</p>
                </div>}
                

                <h2 className='text-white mt-6 text-xs ml-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='' className='text-blue-500 hover:underline cursor-pointer'>Learn more.</a></h2>
            </form>
    </div>
  )
}

export default Login;