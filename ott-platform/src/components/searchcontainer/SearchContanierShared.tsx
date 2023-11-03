import React, { useState, useEffect } from "react";
import InputField from "../inputfeild/InputFeild";
import Button from "../button/Button";
import searchicon from "../../assets/homepageimages/search-normal.png";
import "./SearchContainerShared.css";
import { searchMovies } from "../../services/MovieTmdb";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const SearchResults: React.FC = () => {
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
          {searchmovieResults.map((search) => (
            <div key={search.id}>
              <Link
                to={`/home/dashboard/moviedetails/${search.id}`}
                className="image-link"
              >
                <img
                  src={`${IMAGE_BASE_URL}${search.poster_path}`}
                  alt={`${search.title} Poster`}
                  className="trending-images"
                />
              </Link>
              <div className="movie-details">
                {search.release_date}
                <span className=".">.</span>
                {search.media_type}
              </div>
              <h4 className="movie-title">{search.title}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
