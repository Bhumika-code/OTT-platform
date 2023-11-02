import React, { useState, useEffect } from "react";
import Button from "../../components/button/Button";
import "./DashBoard.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
  fetchTrendingTvseries,
  fetchpopularTvseries,
} from "../../services/MovieTmdb";
import MovieCarousel from "../../components/carousel/MovieCarousel";
import TvCarousel from "../../components/carousel/TvCarousel";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  first_air_date: string;
  name: string;
}

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const DashBoard: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [popularTvseries, setPopularTvseries] = useState<Movie[]>([]);
  const [trendingTvseries, setTrendingTvseries] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularPromise = fetchPopularMovies();
      const trendingPromise = fetchTrendingMovies();
      const popularTvseriesPromise = fetchpopularTvseries();
      const trendingTvseriesPromise = fetchTrendingTvseries();

      try {
        const [
          popularResponse,
          trendingResponse,
          popularTvseriesResponse,
          trendingTvseriesResponse,
        ] = await Promise.allSettled([
          popularPromise,
          trendingPromise,
          popularTvseriesPromise,
          trendingTvseriesPromise,
        ]);

        if (popularResponse.status === "fulfilled") {
          setPopularMovies(popularResponse.value);
          console.log(popularResponse.value);
        } else {
          console.error(
            "Error fetching popular movies:",
            popularResponse.reason
          );
        }

        if (trendingResponse.status === "fulfilled") {
          setTrendingMovies(trendingResponse.value);
          console.log(trendingResponse.value);
        } else {
          console.error(
            "Error fetching trending movies:",
            trendingResponse.reason
          );
        }
        if (popularTvseriesResponse.status === "fulfilled") {
          setPopularTvseries(popularTvseriesResponse.value);
          console.log(popularTvseriesResponse.value);
        } else {
          console.error(
            "Error fetching popular movies:",
            popularTvseriesResponse.reason
          );
        }

        if (trendingTvseriesResponse.status === "fulfilled") {
          setTrendingTvseries(trendingTvseriesResponse.value);
          console.log(trendingTvseriesResponse.value);
        } else {
          console.error(
            "Error fetching trending movies:",
            trendingTvseriesResponse.reason
          );
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <Searchcontainer placeholder="search for movies or tv series" />

      <div className="trending-movies">
        <div className="movie-trending">
          <h2>Trending </h2>
          <Button label="Movie" className="movie-button" />
        </div>

        <div className="flex-container ">
          <MovieCarousel
            movies={trendingMovies}
            IMAGE_BASE_URL={IMAGE_BASE_URL}
          />
        </div>
      </div>

      <div className="popular-movies">
        <div className="movie-popular">
          <h2>Popular</h2>
          <Button label="Movie" className="movie-button" />
        </div>
        <div className="flex-container">
          <MovieCarousel
            movies={popularMovies}
            IMAGE_BASE_URL={IMAGE_BASE_URL}
          />
        </div>
      </div>
      <div className="trending-movies">
        <div className="movie-trending">
          <h2>Trending </h2>
          <Button label="Tvseries" className="movie-button" />
        </div>

        <div className="flex-container ">
          <TvCarousel
            Tvseries={trendingTvseries}
            IMAGE_BASE_URL={IMAGE_BASE_URL}
          />
        </div>
      </div>
      <div className="popular-movies">
        <div className="movie-popular">
          <h2>Popular</h2>
          <Button label="Tvseries" className="movie-button" />
        </div>
        <div className="flex-container">
          <TvCarousel
            Tvseries={popularTvseries}
            IMAGE_BASE_URL={IMAGE_BASE_URL}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
