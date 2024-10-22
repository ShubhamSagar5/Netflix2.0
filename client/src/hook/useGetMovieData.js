import axios from 'axios'
import { getMoviesOptions } from '../constants/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularmovie, addTopRatedMovie, addTrailerMovie, addUpComingMovie } from '../redux/MovieSlice'

export const useGetNowPlayingMovies = async () => {

    const dispatch = useDispatch()


    try {

        const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', getMoviesOptions)
        dispatch(addNowPlayingMovies(res.data.results))
    } catch (error) {
        console.log(error.message)
    }
}

export const useGetPopularMovie = async () => {

    const dispatch = useDispatch()

    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', getMoviesOptions)
        dispatch(addPopularmovie(res.data.results))
    } catch (error) {
        console.log(error.message)
    }
}

export const useTopRatedMovie = async () => {

    const dispatch = useDispatch()
    try {

        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', getMoviesOptions)
        dispatch(addTopRatedMovie(res.data.results))
    } catch (error) {
        console.log(error.message)
    }

}

export const useUpcomingMovie = async () => {

    const dispatch = useDispatch()

    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', getMoviesOptions)
        dispatch(addUpComingMovie(res.data.results))
    } catch (error) {

    }
}

export const useGetMovieTrailer = async (movieId) => {
    const dispatch = useDispatch()

    try {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, getMoviesOptions)

        const data = res?.data?.results

        const TrailerData = data.filter((data) => {
            return data?.type == "Trailer"
        })

        const dummyData = {
            id:"66e1b670b6a995954454e99e",
            iso_639_1:"en",
            iso_3166_1:"US",
            key : "VUCNBAmse04",
            name :"Final Trailer",
            official:true,
            published_at:"2024-09-10T15:00:10.000Z",
            site:"YouTube",
            size:1080,
            type:"Trailer"
        }

        dispatch(addTrailerMovie(TrailerData?.length > 0 ? TrailerData[0] : dummyData))


    } catch (error) {
        console.log(error.message)
    }
}