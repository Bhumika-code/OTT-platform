import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SearchBar from "../../components/searchcontainer/SearchBar";
import movieImage from "../../assets/images/Vector (1).svg";
import "./SearchResult.css";
import { searchMovies } from "../../services/MovieTmdb";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}
function Search() {
  const { query } = useParams();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((data) => {
          setSearchResults(data);
          if (data.length === 0) {
            navigate(`/noresult/${query}`);
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  }, [query]);

  const handleSearch = (value: string) => {
    if (value.trim() !== "") {
      navigate(`/home/search/${value}`);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {searchResults.length > 0 && (
        <div>
          <p className="searchresult-number">{`Found ${searchResults.length} results for '${query}'`}</p>
          <div className="genre-container">
            {searchResults.map((movie) => (
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
}

export default Search;
