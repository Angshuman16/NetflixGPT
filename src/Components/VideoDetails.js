import React from 'react'

const VideoDetails = ({title, overview}) => {
  return (
    <div  className=' w-screen aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black'>

       <h1 className='text-6xl text-white font-bold'>{title}</h1>
       <p className='w-1/3 py-6 text-white text-lg '>{overview}</p>

      <div className='flex px-0 ml-0'>
       <button className='p-2 px-5 m-2 bg-white text-black hover:bg-opacity-50 rounded-md hover:text-white '>Play </button>
       <button className='p-2 px-5 m-2 bg-slate-500 rounded-md text-white  hover:bg-white hover:text-black  '>More Info</button>

       </div>

    </div>
  )
}

export default VideoDetails