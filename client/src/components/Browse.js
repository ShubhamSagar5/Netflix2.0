import React, { useEffect } from 'react'
import Header from './Header'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import MainContainer from './MainContainer'
import MovieContainer from './MovieContainer'
import { useDispatch } from 'react-redux'
import { useGetNowPlayingMovies, useGetPopularMovie, useTopRatedMovie, useUpcomingMovie } from '../hook/useGetMovieData'


const Browse = () => {
 
  const user  = useSelector((Store) => Store.app.user)

  const dispatch  = useDispatch()

  const navigate = useNavigate()

  useGetNowPlayingMovies()
  useGetPopularMovie()
  useTopRatedMovie()
  useUpcomingMovie()

  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  })

 
  return (
    <div>
    <Header/>
    <MainContainer/>
    <MovieContainer/>
    </div>
  )
}

export default Browse