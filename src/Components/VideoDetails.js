import React from 'react'

const VideoDetails = ({title, overview}) => {
  return (
    <div  className=" w-screen aspect-video pt-[12rem] px-14 absolute bg-gradient-to-r from-black">

       <h1 className='text-6xl text-white font-bold'>{title}</h1>
       <p className='w-1/3 py-6 text-white text-lg '>{overview}</p>

      <div className='flex px-0 ml-0'>
       <button className=' p-3 px-5 m-1 text-[15px] bg-white text-black font-semibold hover:bg-opacity-50 rounded-md hover:text-white '>Play </button>
       <button className='p-3 px-5 m-1 bg-white bg-opacity-30 rounded-md text-white  hover:bg-white hover:text-black  '>More Info</button>

       </div>

    </div>
  )
}

export default VideoDetails