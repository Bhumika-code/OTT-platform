import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovieDetails = async (movieId:number) => {
  try {
    const apiUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};
