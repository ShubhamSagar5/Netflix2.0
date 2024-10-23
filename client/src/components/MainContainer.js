import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
 

  const movie = useSelector((store)=>store?.movie?.nowPlayingMovies) 
  if(!movie) return
  const {original_title,overview,id} = movie[0]

 
  return (
    <div className='overflow-x-hidden'>
        

        <VideoTitle title={original_title} overview={overview}/>
            
        <VideoBackground videoId={id}/>
        
    </div>
  )
}

export default MainContainer