import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTvseriesDetails } from "../../services/TvDetailsService";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";

const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

interface Tv {
  name: string;
  first_air_date: string;
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

const TvDetails = () => {
  const { id } = useParams();
  const [TvseriesDetails, setTvseriesDetails] = useState<Tv | null>(null);

  useEffect(() => {
    if (id) {
      getTvseriesDetails(id)
        .then((response) => {
          setTvseriesDetails(response.data);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
        });
    }
  }, [id]);
  return (
    <div className="dashboard-container">
      <Searchcontainer />

      {TvseriesDetails ? (
        <div className="movie-details-flex-container">
          <img
            src={`${IMAGE_BASE_URL}${TvseriesDetails.poster_path}`}
            alt={` Poster`}
            className="movie-card-images"
          />
          <div className="movie-card-details-page">
            <h2 className="details-title">{TvseriesDetails.name}</h2>
            <p className="rating">{TvseriesDetails.vote_average}</p>
            <div className="details-grid">
              <div>
                <p>Language</p>
                <p>{TvseriesDetails.original_language}</p>
              </div>
              <div>
                <p>Release date</p>
                <p>{TvseriesDetails.first_air_date}</p>
              </div>
              <div>
                <p>Status</p>
                <p>{TvseriesDetails.status}</p>
              </div>
            </div>
            <h1 className="synopsis-header">Synopsis</h1>
            <p className="synopsis-overview">{TvseriesDetails.overview}</p>
            <p>{TvseriesDetails.genre_ids}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TvDetails;
