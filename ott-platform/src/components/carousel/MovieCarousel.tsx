import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./MovieCarousel.css";
import { toggleBookmark, getBookmarks } from "../../services/BookmarkService";
import movieImage from "../../assets/images/Vector (1).svg";
import bookmarkicon from "../../assets/images/bookmarkactivesvg.svg";
import unbookmarkedicon from "../../assets/images/bookmarkiconsvg.svg";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}

interface MovieCarouselProps {
  movies: Movie[];
  IMAGE_BASE_URL?: string;
  showButtons?: boolean;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  IMAGE_BASE_URL,
  showButtons = true,
}) => {
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

  const isMovieBookmarked = (movie: Movie): boolean => {
    return getBookmarks().some((item: Movie) => item.id === movie.id);
  };
  const isMobile = window.innerWidth <= 767;
  const isIpadAir = window.innerWidth <= 1180 && !isMobile;
  return showButtons ? (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={isMobile ? 50 : isIpadAir ? 25 : 25}
      dynamicHeight={false}
    >
      {movies.map((movie) => (
        <div key={movie.id} className="movie-carousel-item">
          <img
            src={isMovieBookmarked(movie) ? bookmarkicon : unbookmarkedicon}
            className="bookmark-button"
            onClick={() => handleBookmarkClick(movie)}
            alt="bookmarked"
          />
          <Link
            to={`/home/dashboard/moviedetails/${movie.id}`}
            className="image-link"
          >
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="trending-images"
            />
          </Link>
          <div className="movie-details">
            {new Date(movie.release_date).getFullYear()}
            <span className=".">.</span>
            <img src={movieImage} alt="movieimage" className="movie-image" />
            {movie.media_type || "movie"}
          </div>
          <h4 className="movie-title">{movie.title}</h4>
        </div>
      ))}
    </Carousel>
  ) : (
    <div className="movie-carousel-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-carousel-item">
          <Link
            to={`/home/dashboard/moviedetails/${movie.id}`}
            className="image-link"
          >
            <img
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="trending-images"
            />
          </Link>
          <div className="movie-details">
            {new Date(movie.release_date).getFullYear()}
            <span className=".">.</span>
            <img src={movieImage} alt="movieimage" className="movie-image" />
            {movie.media_type || "movie"}
          </div>
          <h4 className="movie-title">{movie.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default MovieCarousel;
export type { MovieCarouselProps };
