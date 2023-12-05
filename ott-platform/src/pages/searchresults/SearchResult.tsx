import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import SearchBar from "../../components/searchcontainer/SearchBar";
import movieImage from "../../assets/images/vectormovie.svg";
import "./SearchResult.css";
import { searchMovies } from "../../services/MovieTmdb";
import bookmarkicon from "../../assets/images/bookmarkactivesvg.svg";
import unbookmarkedicon from "../../assets/images/bookmarkiconsvg.svg";
import {
  toggleBookmark,
  getBookmarks,
  getBookmarksTv,
} from "../../services/BookmarkService";
import SVGLoader from "../../components/SvgLoader";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}
interface Tv {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  first_air_date: string;
}
function Search() {
  const { query } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Movie[]>(
    getBookmarks().filter((item: Movie) => item.release_date)
  );
  const [bookmarkedTvs, setBookmarkedTvs] = useState<Tv[]>(
    getBookmarksTv().filter((item: Tv) => item.first_air_date)
  );

  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  const handleBookmarkClick = (item: Movie | Tv) => {
    toggleBookmark(item);
    if (item.media_type === "movie") {
      setBookmarkedMovies(
        getBookmarks().filter((movie: Movie) => movie.release_date)
      );
    } else {
      setBookmarkedTvs(getBookmarksTv().filter((tv: Tv) => tv.first_air_date));
    }
  };

  const isMovieBookmarked = (movie: Movie): boolean => {
    return getBookmarks().some((item: Movie) => item.id === movie.id);
  };

  const isTvBookmarked = (tv: Tv): boolean => {
    return getBookmarksTv().some((item: Tv) => item.id === tv.id);
  };
  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((data) => {
          setSearchResults(data);
          setLoading(false);
          if (data.length === 0) {
            navigate(`/noresult/${query}`);
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setLoading(false);
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
          <div className="bookmark-genre-container">
            {searchResults.map((movie) => (
              <div key={movie.id} className="search-div-container">
                <img
                  src={
                    isMovieBookmarked(movie) ? bookmarkicon : unbookmarkedicon
                  }
                  className="bookmark-icon"
                  onClick={() => handleBookmarkClick(movie)}
                  alt="bookmarked"
                />
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
