import axios from 'axios'
import { getMoviesOptions } from '../constants/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularmovie, addTopRatedMovie, addTrailerMovie, addUpComingMovie, setDialogBoxVideo } from '../redux/MovieSlice'
import { useEffect } from 'react'

export const useGetNowPlayingMovies = async () => {

    const dispatch = useDispatch()

    const nowPlayingMovies = async() => {
        try {

        const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', getMoviesOptions)
        dispatch(addNowPlayingMovies(res.data.results))
    } catch (error) {
        console.log(error.message)
    } 
    }

    useEffect(()=>{
        nowPlayingMovies()
    },[])

   
}

export const useGetPopularMovie = async () => {

    const dispatch = useDispatch()

    const popularMovie = async() => {
         try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', getMoviesOptions)
        dispatch(addPopularmovie(res.data.results))
    } catch (error) {
        console.log(error.message)
    }
    } 

    useEffect(()=>{
        popularMovie()
    },[])

   
}

export const useTopRatedMovie = async () => {

    const dispatch = useDispatch()
   
    const topRatedmovie = async() => {
        
    try {

        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', getMoviesOptions)
        dispatch(addTopRatedMovie(res.data.results))
    } catch (error) {
        console.log(error.message)
    }
    }

    useEffect(()=>{
        topRatedmovie()
    },[])


}

export const useUpcomingMovie = async () => {

    const dispatch = useDispatch()

    const upcomingmovies = async() => {
        try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', getMoviesOptions)
        dispatch(addUpComingMovie(res.data.results))
    } catch (error) {

    }
    }

    useEffect(()=>{
        upcomingmovies()
    },[])
    
}

export const useGetMovieTrailer = async (movieId,bool) => {
    const dispatch = useDispatch()

    const getMovieTrailer = async() => {
try {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, getMoviesOptions)

        const data = res?.data?.results

        const TrailerData = data.filter((data) => {
            return data?.type === "Trailer"
        })
if(!bool){
    dispatch(addTrailerMovie(TrailerData?.length > 0 ? TrailerData[0] : res.data.results[0])) 
}
       

if(bool){
    dispatch(setDialogBoxVideo(TrailerData?.length > 0 ? TrailerData[0] : res.data.results[0]))
}
        


    } catch (error) {
        console.log(error.message)
    }
    }

        useEffect(()=>{
            getMovieTrailer()
    },[movieId])

}