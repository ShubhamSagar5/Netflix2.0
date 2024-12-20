import React from 'react'
import { useDispatch } from 'react-redux'
import { setDialogVideoId, toggleDialogBox } from '../redux/MovieSlice'

const MovieCard = ({poster,videoId}) => {
  
  const dispatch = useDispatch() 

  if(!poster){
    return null
  }

  const handleDialogVideo = () => {
    dispatch(setDialogVideoId(videoId))
    dispatch(toggleDialogBox(true))
    console.log(videoId)

  }

  return (
    <div className='w-40'>
<img className='' src={`https://image.tmdb.org/t/p/original${poster}`} alt="moviePoster" onClick={handleDialogVideo} />
    </div>
  )
}

export default MovieCard


// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YKw6n-RDgqyFy69GSuuiue2qkkByXQLJLg&s