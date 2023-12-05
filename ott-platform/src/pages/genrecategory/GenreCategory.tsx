import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./GenreCategory.css";
import movieImage from "../../assets/images/vectormovie.svg";
import { getMoviesByGenre } from "../../services/MovieGnereListCategory";
import { useParams } from "react-router-dom";
import { toggleBookmark, getBookmarks } from "../../services/BookmarkService";
import Search from "../searchresults/SearchResult";
import bookmarkicon from "../../assets/images/bookmarkactivesvg.svg";
import unbookmarkedicon from "../../assets/images/bookmarkiconsvg.svg";
import SVGLoader from "../../components/SvgLoader";
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}

const GenreCategory: React.FC = () => {
  const { id } = useParams();
  const [movieGeneres, setMovieGeneres] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookmarkedMovies, setBookmarkedMovies] = React.useState<Movie[]>(
    getBookmarks().filter((item: Movie) => item.release_date)
  );

  const handleBookmarkClick = (movie: Movie) => {
    toggleBookmark(movie);
    setBookmarkedMovies((prevBookmarkedMovies) => {
      if (isMovieBookmarked(movie)) {
        return prevBookmarkedMovies.filter((m) => m.id !== movie.id);
      } else {
        return [...prevBookmarkedMovies, movie];
      }
    });
  };
  useEffect(() => {
    if (id) {
      fetchMovieGenre();
    }
  }, [id]);

  const fetchMovieGenre = () => {
    if (id) {
      getMoviesByGenre(id)
        .then((response) => {
          if (response.status === 200) {
            setMovieGeneres(response.data.results);
          } else {
            console.error("Failed to fetch popular movies");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching popular movies: ", error);
          setLoading(false);
        });
    }
  };
  const isMovieBookmarked = (movie: Movie): boolean => {
    return getBookmarks().some((item: Movie) => item.id === movie.id);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <SVGLoader />
        </div>
      ) : (
        <>
          <Search />

          <div className="genre-container">
            {movieGeneres.map((movie) => (
              <div key={movie.id} className="boomark-division">
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
                  {movie.media_type || "movie"}
                </div>
                <h4 className="movie-title">{movie.title}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GenreCategory;
