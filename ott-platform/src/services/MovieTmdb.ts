
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch popular movies');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw error;
    }
};

const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw error;
    }
};



const fetchTrendingTvseries = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw error;
    }
};
const fetchpopularTvseries = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch trending movies');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw error;
    }
};


export { fetchPopularMovies, fetchTrendingMovies, fetchTrendingTvseries,fetchpopularTvseries };
