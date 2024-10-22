import React from 'react'

const MovieCard = ({poster}) => {
  return (
    <div className='w-40'>
<img className='' src={`https://image.tmdb.org/t/p/original${poster}`} alt="moviePoster" />
    </div>
  )
}

export default MovieCard


// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YKw6n-RDgqyFy69GSuuiue2qkkByXQLJLg&s