import React from 'react'

const VideoDetails = ({title, overview}) => {
  return (
    <div  className='pt-[19rem] ml-4'>

       <h1 className='text-6xl font-bold'>{title}</h1>
       <p className='w-1/2 py-6 text-lg '>{overview}</p>

      <div className='flex px-0 ml-0'>
       <button className='p-2 px-5 m-2 bg-slate-400 text-black hover:bg-black hover:text-white bg-opacity-50'>Play </button>
       <button className='p-2 px-5 m-2 bg-slate-400 text-black  hover:bg-black hover:text-white bg-opacity-50 '>More Info</button>

       </div>

    </div>
  )
}

export default VideoDetails