import React from "react";
import { Link } from "react-router-dom";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";
import movieImage from "../../assets/images/Vector (1).svg";
import "./SearchResult.css";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}

interface SearchResultsProps {
  searchmovieResults: Movie[];
}
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const SearchResults: React.FC<SearchResultsProps> = ({
  searchmovieResults,
}) => {
  return (
    <div>
      <Searchcontainer />
      <p>{`Number of movies displayed: ${searchmovieResults.length}`}</p>
      {searchmovieResults.length > 0 && (
        <div className="genre-container">
          {searchmovieResults.map((movie) => (
            <div key={movie.id}>
              <Link
                to={`/home/dashboard/moviedetails/${movie.id}`}
                className="genre-image-link"
              >
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                  className="genre-movie-images"
                />
              </Link>
              <div className="movie-details">
                {movie.release_date}
                <span className=".">.</span>
                <img
                  src={movieImage}
                  alt="movieimage"
                  className="movie-image"
                />
                {movie.media_type}
              </div>
              <h4 className="movie-title">{movie.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
