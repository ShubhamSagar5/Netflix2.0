import React from 'react'
import { useGetMovieTrailer } from '../hook/useGetMovieData'
import { useSelector } from 'react-redux'

const VideoBackground = ({videoId,bool=false}) => {
 
 
  useGetMovieTrailer(videoId)

  const TrailerData = useSelector((store)=>store?.movie?.trailerMovie)
 console.log(TrailerData)
  return (
    <div className='w-[100vw] '>
            <iframe
                className="w-[100vw] aspect-video" 
                src={`https://www.youtube.com/embed/${TrailerData?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
  )
}

export default VideoBackground 


//https://www.youtube.com/embed/K7rPUuEXvvo?si=5SFXk53gs1KA3I6V&autoplay=1&mute=1