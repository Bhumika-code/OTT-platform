import React, { useState } from "react";
import { Link } from "react-router-dom";
import movieImage from "../../assets/images/Vector (1).svg";
import tvImage from "../../assets/images/tvimage.svg";
import {
  toggleBookmark,
  getBookmarks,
  getBookmarksTv,
} from "../../services/BookmarkService";
import "./BookMark.css";
import Search from "../searchresults/SearchResult";
import bookmarkicon from "../../assets/images/bookmarkactivesvg.svg";
import unbookmarkedicon from "../../assets/images/bookmarkiconsvg.svg";

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

const Bookmark: React.FC = () => {
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

  return (
    <div>
      <Search />
      <div>
        <h2 className="bookmarked-movies">Bookmarked Movies</h2>
      </div>
      <div className="bookmark-container">
        {bookmarkedMovies.map((movie: Movie) => (
          <div key={movie.id}>
            <img
              src={isMovieBookmarked(movie) ? bookmarkicon : unbookmarkedicon}
              className="tv-bookmark-icon"
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
              <img src={movieImage} alt="movieimage" className="movie-image" />
              {movie.media_type || "movie"}
            </div>
            <h4 className="movie-title">{movie.title}</h4>
          </div>
        ))}
      </div>
      <h2 className="bookmarked-tvseries">Bookmarked Tv shows</h2>
      <div className="bookmark-container">
        {bookmarkedTvs.map((tv: Tv) => (
          <div key={tv.id}>
            <img
              src={isTvBookmarked(tv) ? bookmarkicon : unbookmarkedicon}
              className="tv-bookmark-icon"
              onClick={() => handleBookmarkClick(tv)}
              alt="bookmarked"
            />
            <Link
              to={`/home/dashboard/tvdetails/${tv.id}`}
              className="genre-image-link"
            >
              <img
                src={`${IMAGE_BASE_URL}${tv.poster_path}`}
                alt={`${tv.title} Poster`}
                className="genre-movie-images"
              />
            </Link>
            <div className="movie-details">
              {tv.first_air_date}
              <span className=".">.</span>
              <img src={tvImage} alt="movieimage" className="tv-image" />
              {tv.media_type || "tv"}
            </div>
            <h4 className="movie-title">{tv.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
