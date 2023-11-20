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

import Search from "../searchresults/SearchResult";

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
  const [loading, setLoading] = useState(true);

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
        } else {
          console.error(
            "Error fetching popular movies:",
            popularResponse.reason
          );
        }

        if (trendingResponse.status === "fulfilled") {
          setTrendingMovies(trendingResponse.value);
        } else {
          console.error(
            "Error fetching trending movies:",
            trendingResponse.reason
          );
        }
        if (popularTvseriesResponse.status === "fulfilled") {
          setPopularTvseries(popularTvseriesResponse.value);
        } else {
          console.error(
            "Error fetching popular movies:",
            popularTvseriesResponse.reason
          );
        }

        if (trendingTvseriesResponse.status === "fulfilled") {
          setTrendingTvseries(trendingTvseriesResponse.value);
        } else {
          console.error(
            "Error fetching trending movies:",
            trendingTvseriesResponse.reason
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <Search />

          <div className="trending-movies">
            <div className="movie-trending">
              <h2>Trending </h2>
              <Button label="Movie" className="movie-button" color="" />
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
              <Button label="Movie" className="movie-button" color="" />
            </div>
            <div className="flex-container">
              <MovieCarousel
                movies={popularMovies}
                IMAGE_BASE_URL={IMAGE_BASE_URL}
              />
            </div>
          </div>
          <div className="trending-movies">
            <div className="tv-trending">
              <h2>Trending </h2>
              <Button label="Tvseries" className="movie-button" color="" />
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
              <Button label="Tvseries" className="movie-button" color="" />
            </div>
            <div className="flex-container">
              <TvCarousel
                Tvseries={popularTvseries}
                IMAGE_BASE_URL={IMAGE_BASE_URL}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoard;
