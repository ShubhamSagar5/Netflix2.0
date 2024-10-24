import React from 'react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { Loader } from '../utils/Loader'
import ShimmerUi from '../utils/ShimmerUi'

const SearchMovie = () => {
  
  const {searchMovieName,searchMovieData} = useSelector((store)=>store?.searchMovie)
  const loading = useSelector((store)=>store?.searchMovie?.loading)
console.log(loading)
  return (
  
  <div className='w-screen  h-screen bg-black'>
      <SearchBar/>
      <div className='p-4'>

      {
        loading ? <ShimmerUi/> : <MovieList title={searchMovieName} videoData={searchMovieData} searchMovie={true}/>

      }
      </div>
  </div>
  )
}

export default SearchMovie