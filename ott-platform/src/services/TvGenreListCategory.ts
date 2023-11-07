import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const tvApiUrl = "https://api.themoviedb.org/3/discover/tv";

export const getTvseriesByGenre = (genreId: string) => {
  return axios.get(
    `${tvApiUrl}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with&with_genres=${genreId}`
  );
};