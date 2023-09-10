import React from 'react'
import Header from './Header';

const Login = () => {
  return (
    <div>
         <Header />
            <div className='absolute'>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            </div>
            <form className='absolute bg-black p-12 mt-40 mx-auto right-0 left-0  w-3/12 rounded-lg shadow-lg'>
                <h2 className='text-white text-4xl py-4 font-bold pb-6 m-2 mb-8'>Sign In</h2>
                <input type='text' placeholder='Email or phone number' className='p-3 m-2 w-[18rem] bg-gray-700  rounded-lg text-white  '></input>
                <input type='password' placeholder='Password' className='p-3 m-2  w-[18rem]  bg-gray-700  rounded-lg text-white '></input>
                <button className='p-3 my-8 m-2 bg-red-500 text-white rounded-lg w-[18rem] placeholder:text-2xl '>Signin</button>

                <div className='flex'>
                    <input type='checkbox' className='ml-4'></input>
                    <h3 className='text-white p-2 text-xs  cursor-pointer'>Remember Me</h3>

                    <h4 className=' p-2 ml-[5rem] text-xs text-white  cursor-pointer'>Need Help?</h4>


                </div>

                <div className='flex'>
                <h2 className='text-white ml-4  mt-8'>New to Netflix?</h2>
                <a className='text-white mt-8 text-sm pl-2 hover:underline cursor-pointer'>SignUp Now</a>
                </div>

                <h2 className='text-white mt-6 text-xs ml-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='text-blue-500 hover:underline cursor-pointer'>Learn more.</a></h2>
            </form>
    </div>
  )
}

export default Login;