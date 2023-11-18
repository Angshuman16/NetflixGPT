import React from 'react'

const GPTSearchbar = () => {
  return (
    <div className=' pt-[20%] flex justify-center'>
        <form className=' m-2 w-1/2 bg-black grid grid-cols-12'>


            <input type='text'
             className='p-4 m-4
              rounded-lg
               bg-slate-200 col-span-9' placeholder='What is in your Mind?'></input>

            <button className='bg-red-500 col-span-3 text-white p-2 m-4 rounded-lg hover:bg-red-700 '>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchbar