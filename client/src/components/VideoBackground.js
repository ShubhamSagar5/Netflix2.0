import React from 'react'
import { useGetMovieTrailer } from '../hook/useGetMovieData'
import { useSelector } from 'react-redux'

const VideoBackground = ({videoId}) => {
 
 
  useGetMovieTrailer(videoId)

  const TrailerData = useSelector((store)=>store?.movie?.trailerMovie)
 
  return (
    <div className='w-[100vw] -z-10'>

<iframe className='w-[100vw] h-[100vh]'src={`https://www.youtube.com/embed/${TrailerData?.key}?si=wHOhJc6sVXVC2ecD&autoplay=1&mute=1`} allowFullScreen></iframe>
</div>
  )
}

export default VideoBackground 


//https://www.youtube.com/embed/K7rPUuEXvvo?si=5SFXk53gs1KA3I6V&autoplay=1&mute=1