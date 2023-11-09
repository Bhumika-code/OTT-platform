import React from "react";
import { Link } from "react-router-dom";
import movieImage from "../../assets/images/Vector (1).svg";
import { BiBookmark } from "react-icons/bi";
import {
  toggleBookmark,
  getBookmarks,
  getBookmarksTv,
} from "../../services/BookmarkService";
import Searchcontainer from "../../components/searchcontainer/SearchBar";
import "./BookMark.css";
import Search from "../searchresults/SearchResult";
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
  const bookmarkedMovies: Movie[] = getBookmarks().filter(
    (item: Movie) => item.release_date
  );
  const bookmarkedTvs: Tv[] = getBookmarksTv().filter(
    (item: Tv) => item.first_air_date
  );

  const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
  const handleBookmarkClick = (movie: Movie) => {
    toggleBookmark(movie);
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
            <BiBookmark
              className="bookmark-icon"
              onClick={() => handleBookmarkClick(movie)}
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
              {movie.media_type}
            </div>
            <h4 className="movie-title">{movie.title}</h4>
          </div>
        ))}
      </div>
      <h2 className="bookmarked-tvseries">Bookmarked Tv shows</h2>
      <div className="bookmark-container">
        <div className="bookmark-container">
          {bookmarkedTvs.map((tv: Tv) => (
            <div key={tv.id}>
              <BiBookmark
                className="bookmark-icon-movie-genre"
                onClick={() => handleBookmarkClick(tv)}
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
                <img
                  src={movieImage}
                  alt="movieimage"
                  className="movie-image"
                />
                {tv.media_type}
              </div>
              <h4 className="movie-title">{tv.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
