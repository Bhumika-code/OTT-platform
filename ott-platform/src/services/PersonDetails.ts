import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";
export const getPersonDetails = (id: string) => {
  const apiUrl = `${baseUrl}/person/${id}?api_key=${API_KEY}&language=en-US`;
  return axios.get(apiUrl);
};
export const getPersonCombinedCredits = (id: string) => {
  const apiUrl = `${baseUrl}/person/${id}/combined_credits?api_key=${API_KEY}&language=en-US`;
  return axios.get(apiUrl);
};