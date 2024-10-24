import React, { useState } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
 
  const [movieIdVariable,setMovieIdVariable]  = useState(0)

  const movie = useSelector((store)=>store?.movie?.nowPlayingMovies) 
  if(!movie) return
  const {original_title,overview,id} = movie[0]

  const handleTrailerVideo = ()=> {
    if(movieIdVariable <= 9) {
      setMovieIdVariable(movieIdVariable + 1)
    }else{
      setMovieIdVariable(0)
    }
  }
 
  return (
    <div className='overflow-x-hidden'>
        

        <VideoTitle title={original_title} overview={overview}/>
                 {/* <button onClick={handleTrailerVideo} className='absolute z-50 right-0 top-1/4 bg-white px-5'>Next</button> */}
   
        <VideoBackground videoId={id} bool={false}/> 

        
    </div>
  )
}

export default MainContainer