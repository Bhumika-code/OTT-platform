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

interface SearchResult {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  release_date: string;
  first_air_date?: string;
  media_type: string;
}

function Search() {
  const { query } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState<SearchResult[]>(
    getBookmarks().filter((item: SearchResult) => item.release_date)
  );
  const [bookmarkedTvs, setBookmarkedTvs] = useState<SearchResult[]>(
    getBookmarksTv().filter((item: SearchResult) => item.first_air_date)
  );

  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

  const handleBookmarkClick = (item: SearchResult) => {
    toggleBookmark(item);
    if (item.media_type === "movie") {
      setBookmarkedMovies(
        getBookmarks().filter((movie: SearchResult) => movie.release_date)
      );
    } else {
      setBookmarkedTvs(
        getBookmarksTv().filter((tv: SearchResult) => tv.first_air_date)
      );
    }
  };

  const isMovieBookmarked = (movie: SearchResult): boolean => {
    return getBookmarks().some((item: SearchResult) => item.id === movie.id);
  };

  const isTvBookmarked = (tv: SearchResult): boolean => {
    return getBookmarksTv().some((item: SearchResult) => item.id === tv.id);
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
            {searchResults.map((item: SearchResult) => (
              <div key={item.id} className="search-div-container">
                <img
                  src={
                    item.media_type === "movie"
                      ? isMovieBookmarked(item)
                        ? bookmarkicon
                        : unbookmarkedicon
                      : isTvBookmarked(item)
                      ? bookmarkicon
                      : unbookmarkedicon
                  }
                  className="bookmark-icon"
                  onClick={() => handleBookmarkClick(item)}
                  alt="bookmarked"
                />
                <Link
                  to={`/home/dashboard/${
                    item.media_type === "movie" ? "moviedetails" : "tvdetails"
                  }/${item.id}`}
                  className="genre-image-link"
                >
                  <img
                    src={`${IMAGE_BASE_URL}${item.poster_path}`}
                    alt={`${item.title} Poster`}
                    className="genre-movie-images"
                  />
                </Link>
                <div className="movie-details">
                  {new Date(
                    item.media_type === "movie"
                      ? item.release_date
                      : item.first_air_date!
                  ).getFullYear()}
                  <span className=".">.</span>
                  <img
                    src={movieImage}
                    alt="movieimage"
                    className="movie-image"
                  />
                  {item.media_type}
                </div>
                <h4 className="movie-title">
                  {item.media_type === "movie" ? item.title : item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
