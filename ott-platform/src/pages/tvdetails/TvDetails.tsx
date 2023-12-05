import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvseriesDetails } from "../../services/TvDetailsService";
import { getMovieCredits } from "../../services/MovieCredits";
import Search from "../searchresults/SearchResult";
import { Link } from "react-router-dom";
import SVGLoader from "../../components/SvgLoader";

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
  genres: Genre[];
}
interface Genre {
  id: number;
  name: string;
}
const TvDetails = () => {
  const { id } = useParams();
  const [TvseriesDetails, setTvseriesDetails] = useState<Tv | null>(null);
  const [tvCredits, setTvCredits] = useState<Tv[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getTvseriesDetails(id)
        .then((response) => {
          setTvseriesDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
          setLoading(false);
        });
      getMovieCredits(id)
        .then((response) => {
          setTvCredits(response.data.cast);
        })
        .catch((error) => {
          console.error("Error fetching TV credits:", error);
        });
    }
  }, [id]);
  return (
    <div className="dashboard-container">
      {loading ? (
        <div className="loader-container">
          <SVGLoader />
        </div>
      ) : (
        <>
          <Search />

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
                <div className="details-container">
                  <span className="detail-description">Genres</span>
                  <span className="genre-button-align">
                    {TvseriesDetails.genres.map((genre: Genre) => (
                      <Link to={`/home/tvseries/tvgenrecategory/${genre.id}`}>
                        <button key={genre.id} className="genre-button">
                          {genre.name}
                        </button>
                      </Link>
                    ))}
                  </span>
                </div>
                <h1 className="synopsis-header">Synopsis</h1>
                <p className="synopsis-overview">{TvseriesDetails.overview}</p>
                <p>{TvseriesDetails.genre_ids}</p>
                <h1 className="credits-header">Cast</h1>
                <section className="credits-flex">
                  {tvCredits.map((credit: Tv) => (
                    <a href={`/home/dashboard/persondetails/${credit.id}`}>
                      <button key={credit.id} className="cast-display">
                        {credit.name}
                      </button>
                    </a>
                  ))}
                </section>
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

export default TvDetails;
