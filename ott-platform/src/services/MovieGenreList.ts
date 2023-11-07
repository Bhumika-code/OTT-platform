import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";

export const getMovieGenres = () => {
  const apiUrl = `${baseUrl}/genre/movie/list?api_key=${API_KEY}&language=en`;
    return axios.get(apiUrl);
    
};
