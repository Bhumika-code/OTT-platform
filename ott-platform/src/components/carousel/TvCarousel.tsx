import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./TvCarousel.css";
import {
  toggleBookmarkTv,
  getBookmarksTv,
} from "../../services/BookmarkService";
import tvImage from "../../assets/images/tvimage.svg";
import bookmarkicon from "../../assets/images/bookmarkactivesvg.svg";
import unbookmarkedicon from "../../assets/images/bookmarkiconsvg.svg";
interface Tv {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  first_air_date: string;
  name: string;
}
interface TvCarouselProps {
  Tvseries: Tv[];
  IMAGE_BASE_URL?: string;
}

const MovieCarousel: React.FC<TvCarouselProps> = ({
  Tvseries,
  IMAGE_BASE_URL,
}) => {
  const [bookmarkedMovies, setBookmarkedMovies] = React.useState<Tv[]>(
    getBookmarksTv().filter((item: Tv) => item.release_date)
  );

  const handleBookmarkClick = (movie: Tv) => {
    toggleBookmarkTv(movie);
    setBookmarkedMovies((prevBookmarkedMovies) => {
      if (isTvBookmarked(movie)) {
        return prevBookmarkedMovies.filter((m) => m.id !== movie.id);
      } else {
        return [...prevBookmarkedMovies, movie];
      }
    });
  };

  function getYear(releaseDate: string): string {
    if (releaseDate) {
      const date = new Date(releaseDate);
      return date.getFullYear().toString();
    }
    return "";
  }
  const isTvBookmarked = (tv: Tv): boolean => {
    return getBookmarksTv().some((item: Tv) => item.id === tv.id);
  };
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={25}
      dynamicHeight={false}
    >
      {Tvseries.map((Tv) => (
        <div key={Tv.id}>
          <img
            src={isTvBookmarked(Tv) ? bookmarkicon : unbookmarkedicon}
            className="bookmark-button"
            onClick={() => handleBookmarkClick(Tv)}
            alt="bookmarked"
          />
          <Link
            to={`/home/dashboard/tvdetails/${Tv.id}`}
            className="image-link"
          >
            <img
              src={`${IMAGE_BASE_URL}${Tv.poster_path}`}
              alt={`${Tv.title} Poster`}
              className="trending-images"
            />
          </Link>
          <div className="movie-details">
            {getYear(Tv.first_air_date)}
            <span className=".">.</span>
            <img src={tvImage} alt="movieimage" className="tv-image" />
            {Tv.media_type || "tv"}
          </div>
          <h4 className="movie-title">{Tv.name}</h4>
        </div>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
