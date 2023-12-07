import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";

export const getTvGenres = () => {
  const apiUrl = `${baseUrl}/genre/tv/list?api_key=${API_KEY}&language=en`;
    return axios.get(apiUrl);
    
};
