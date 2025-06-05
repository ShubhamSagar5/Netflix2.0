import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  
  const movie = useSelector((store) => store.movie)

  
  
  return (
    <div className='bg-black p-2 text-white md:-mt-48 mt-32'>
        <MovieList title="Now Playing Movies" videoData ={movie.nowPlayingMovies}/>
        <MovieList title="Popular Movie" videoData ={movie.popularMovie}/>
        <MovieList title="Top Rated movies" videoData ={movie.topRatedMovie}/>
        <MovieList title="Upcoming Movies" videoData ={movie.upcomingMovie}/>

    </div>
  )
}

export default MovieContainer