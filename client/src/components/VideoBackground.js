import React from 'react'
import { useGetMovieTrailer } from '../hook/useGetMovieData'
import { useSelector } from 'react-redux'

const VideoBackground = ({videoId,bool,size}) => {
 
 
  useGetMovieTrailer(videoId,bool)

  const TrailerData = useSelector((store)=>store?.movie?.trailerMovie)
  const dialogBoxVideo = useSelector((store)=>store?.movie?.dialogBoxVideo)
  return (
    <div className=''>
            <iframe
                className={`${size ? 'w-[100%]' : 'w-[100vw] aspect-video'}`} 
                src={`https://www.youtube.com/embed/${!bool ? TrailerData?.key : dialogBoxVideo?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1&loop=1&playlist=${!bool ? TrailerData?.key : dialogBoxVideo?.key}`}
                title="YouTube video player"
                Idh8n5XuYIA
                allowFullScreen>
            </iframe>
        </div>
  )
}

export default VideoBackground 


//https://www.youtube.com/embed/K7rPUuEXvvo?si=5SFXk53gs1KA3I6V&autoplay=1&mute=1