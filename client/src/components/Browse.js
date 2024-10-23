import React, { useEffect, useState } from 'react'
import Header from './Header'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import { useDispatch } from 'react-redux'
import { useGetNowPlayingMovies, useGetPopularMovie, useTopRatedMovie, useUpcomingMovie } from '../hook/useGetMovieData'
import SearchMovie from './SearchMovie'
import { toggelSearchMovie } from '../redux/MovieSlice'


const Browse = () => {
 
  const user  = useSelector((Store) => Store.app.user)
  const searchMovieToggle = useSelector((Store)=> Store?.app?.movie?.searchMovieToggle)

  const [toggle,setToggle]= useState(false)
  const dispatch  = useDispatch()

  const navigate = useNavigate()

  useGetNowPlayingMovies()
  useGetPopularMovie()
  useTopRatedMovie()
  useUpcomingMovie() 

  const handleSearchMovie = () => {
    console.log("clicked")
    setToggle(!toggle) 
    dispatch(toggelSearchMovie())
}


  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  })

 
  return (
    <div>
    <Header handleSearchMovie= {handleSearchMovie} toggle={toggle}/>

    {
      !toggle ?  <>   <MainContainer/>
                      <MovieContainer/>
                </> : <SearchMovie/>
    }

 
    </div>
  )
}

export default Browse