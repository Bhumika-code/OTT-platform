import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { getMovieDetails } from "../../services/MovieDetails";
import Searchcontainer from "../../components/searchcontainer/SearchBar";
import Search from "../searchresults/SearchResult";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  vote_average: number;
  original_language: string;
  overview: string;
  genre_ids: number[];
  status: string;
}

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getMovieDetails(id)
        .then((response) => {
          setMovieDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
          setLoading(false);
        });
    }
  }, [id]);
  return (
    <div className="dashboard-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <Search />

          {movieDetails ? (
            <div className="movie-details-flex-container">
              <img
                src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
                alt={` Poster`}
                className="movie-card-images"
              />
              <div className="movie-card-details-page">
                <h2 className="details-title">{movieDetails.title}</h2>
                <p className="rating">{movieDetails.vote_average}</p>
                <div className="details-grid">
                  <div>
                    <p>Language</p>
                    <p>{movieDetails.original_language}</p>
                  </div>
                  <div>
                    <p>Release date</p>
                    <p>{movieDetails.release_date}</p>
                  </div>
                  <div>
                    <p>Status</p>
                    <p>{movieDetails.status}</p>
                  </div>
                </div>
                <h1 className="synopsis-header">Synopsis</h1>
                <p className="synopsis-overview">{movieDetails.overview}</p>
                <p>{movieDetails.genre_ids}</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </div>
  );
};

export default MovieDetails;
