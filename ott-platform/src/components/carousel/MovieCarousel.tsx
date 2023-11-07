import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./MovieCarousel.css";
import { toggleBookmark, getBookmarks } from "../../services/BookmarkService";
import movieImage from "../../assets/images/Vector (1).svg";
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
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  movies,
  IMAGE_BASE_URL,
}) => {
  const handleBookmarkClick = (movie: Movie) => {
    toggleBookmark(movie);
  };
  function getYear(releaseDate: string): string {
    if (releaseDate) {
      const date = new Date(releaseDate);
      return date.getFullYear().toString();
    }
    return "";
  }

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={20}
      dynamicHeight={false}
    >
      {movies.map((movie) => (
        <div key={movie.id}>
          <BiBookmark
            className="bookmark-icon"
            onClick={() => handleBookmarkClick(movie)}
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
            {getYear(movie.release_date)}
            <span className=".">.</span>
            <img src={movieImage} alt="movieimage" className="movie-image" />
            {movie.media_type}
          </div>
          <h4 className="movie-title">{movie.title}</h4>
        </div>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
