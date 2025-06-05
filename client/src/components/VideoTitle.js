import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";



const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute mt-[190px] md:mt-80 text-white px-2'>
        <div className=''>
            <div className='text-3xl font-semibold'>{title}</div>
            <p className='text-lg px-1 md:w-1/3'>{overview}</p>
            <div className='flex gap-4 my-4'>
                <div className='px-4 py-2 bg-white text-black rounded-lg flex items-center gap-1 font-semibold hover:bg-opacity-80 cursor-pointer'><CiPlay1 size={20}/> Play</div>
                <div className='px-4 py-2 bg-white bg-opacity-40 text-black rounded-lg flex items-center gap-1 font-semibold hover:bg-opacity-80 cursor-pointer'><CiCircleInfo size={20}/> More info</div>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle