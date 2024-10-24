import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const MovieList = ({title,videoData,searchMovie}) => {
  
    
    return (
    <div className=''>
        <div className='text-2xl my-3 text-white capitalize'>{title}</div>
        <div className='flex overflow-x-auto gap-3 no-scrollbar w-auto h-auto'>
           
         {
            searchMovie && <div className='text-white mx-auto my-24'>{videoData?.length === 0 ? "No Movie Data Found With This Keyword Try Another Keyword" : ""}</div>
         } 
           
         {
                videoData?.map((data)=>{
                    return (
                        <div key={data.id}>
                        <MovieCard poster={data.poster_path} videoId={data.id}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MovieList