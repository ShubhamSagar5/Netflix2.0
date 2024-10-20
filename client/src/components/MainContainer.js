import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  return (
    <div className='overflow-x-hidden'>
        <VideoTitle/>
            
        <VideoBackground/>
        
    </div>
  )
}

export default MainContainer