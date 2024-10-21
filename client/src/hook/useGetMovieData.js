import axios from 'axios'
import { getNowPlayingMoviesOptions } from '../constants/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../redux/MovieSlice'


export const useGetNowPlayingMovies = async() => {

    const dispatch = useDispatch()

    try {
        
        const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',getNowPlayingMoviesOptions)
        dispatch(addNowPlayingMovies(res.data.results))
    } catch (error) {
        console.log(error.message)
    }
}

