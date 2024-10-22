import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = ({title,videoData}) => {
  
    
    return (
    <div className=''>
        <div className='text-2xl my-3'>{title}</div>
        <div className='flex overflow-x-auto gap-3 no-scrollbar w-auto h-auto'>
            {
                videoData?.map((data)=>{
                    return (
                        <div key={data.id}>
                        <MovieCard poster={data.poster_path}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MovieList