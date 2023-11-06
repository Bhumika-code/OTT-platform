import React, { useState, useEffect } from "react";
import InputField from "../inputfeild/InputFeild";
import Button from "../button/Button";
import searchicon from "../../assets/homepageimages/search-normal.png";
import "./SearchContainerShared.css";
import { searchMovies } from "../../services/MovieTmdb";
import { Link } from "react-router-dom";
import movieImage from "../../assets/images/Vector (1).svg";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const SearchContainer: React.FC = () => {
  const [searchmovieResults, setSearchmovieResults] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      try {
        const results = await searchMovies(searchQuery);
        setSearchmovieResults(results);
      } catch (error) {
        console.error("Error searching for movies:", error);
      }
    }
  };

  return (
    <div>
      <div className="search-container">
        <img src={searchicon} alt="search" className="search-icon" />
        <InputField
          label={""}
          type={""}
          placeholder={"Search for movies or TV series"}
          className="feild-style"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Button
          label="search"
          className="search-button"
          onClick={handleSearch}
        />
      </div>
      {searchmovieResults.length > 0 && (
        <div>
          <p className="searchresult-number">{`Found ${searchmovieResults.length} results for '${searchQuery}'`}</p>
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
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
