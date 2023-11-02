import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const movieApiUrl = "https://api.themoviedb.org/3/discover/movie";

export const getMoviesByGenre = (genreId: string) => {
  return axios.get(
    `${movieApiUrl}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with&with_genres=${genreId}`
  );
};
