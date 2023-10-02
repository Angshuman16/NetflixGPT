import React from 'react'
import { IMG_CDN_URL } from '../Utils/Constants'

const MovieCards = ({posterPath}) => {
  return (
    <div className='w-44'>
    <img   src={IMG_CDN_URL+posterPath}></img>
</div>
  )
}

export default MovieCards