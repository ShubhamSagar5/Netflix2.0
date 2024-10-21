export const getNowPlayingMoviesOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.TMDB_TOKEN
  }
};


