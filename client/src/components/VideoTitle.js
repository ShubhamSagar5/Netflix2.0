import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";



const VideoTitle = () => {
  return (
    <div className=' absolute mt-96 text-white px-2'>
        <div className=''>
            <div className='text-4xl font-semibold'>Big Buck</div>
            <p className='text-xl px-1'>Lorem ipsum dolor si ratione minima animi aperiam dolorem sequi!</p>
            <div className='flex gap-4 mt-4'>
                <div className='px-4 py-2 bg-white text-black rounded-lg flex items-center gap-1 font-semibold hover:bg-opacity-80 cursor-pointer'><CiPlay1 size={20}/> Play</div>
                <div className='px-4 py-2 bg-white text-black rounded-lg flex items-center gap-1 font-semibold hover:bg-opacity-80 cursor-pointer'><CiCircleInfo size={20}/> More info</div>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle