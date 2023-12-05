import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";
export const getMovieCredits = (id: string) => {
  const creditsUrl  = `${baseUrl}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  return axios.get(creditsUrl);
};