import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getMoviesOptions } from '../constants/constant'
import {useSelector,useDispatch} from 'react-redux'
import { setLoadingStatus, setMovieNameAndMovieData } from '../redux/SearchMovieSlice'
import { Loader } from '../utils/Loader'

const SearchBar = () => {
  
  
  const [searchMovie,setSearchMovie] = useState()

  const dispatch = useDispatch()

  const loading = useSelector((store)=>store?.searchMovie?.loading)

  const handleInput = (e) => {
    setSearchMovie(e.target.value)
  }

  const handleSearchFunction  = async () => {
    
    dispatch(setLoadingStatus(true))

    setTimeout(async() => {
        try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1}`,getMoviesOptions)
      const movieName = searchMovie
      const movieData = res?.data?.results

      dispatch(setMovieNameAndMovieData({movieName,movieData}))
      setSearchMovie('')
      console.log("timer")
    } catch (error) {
      console.log(error.message)
    }finally{
      dispatch(setLoadingStatus(false))
    }
    }, 3000);
  
  }


  
  return (
    <div>
      <div className=' w-screen flex justify-center pt-44'>
        <div className='shadow-2xl p-3 w-[60rem]  flex justify-center'>

        <input className='w-full px-2 text-lg  border border-black rounded-l-lg focus:outline-none' type="text" name="" id="" value={searchMovie} onChange={handleInput} placeholder='Search Movie  .  .  .  .  .  .  .' /> 
        <button className='bg-red-500 text-white px-5 py-2 rounded-r-lg' onClick={handleSearchFunction}>{loading ? <Loader/> : "Search"}</button>
        </div>

    </div>
    <div>

    </div>
    </div>
    
  )
}

export default SearchBar