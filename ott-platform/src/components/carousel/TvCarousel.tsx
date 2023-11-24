import React, { useEffect, useState } from "react";
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

const TvCarousel: React.FC<TvCarouselProps> = ({
  Tvseries,
  IMAGE_BASE_URL,
}) => {
  const [bookmarkedMovies, setBookmarkedMovies] = React.useState<Tv[]>(
    getBookmarksTv().filter((item: Tv) => item.release_date)
  );

  const handleBookmarkClick = (tv: Tv) => {
    toggleBookmarkTv(tv);
    setBookmarkedMovies((prevBookmarkedMovies) => {
      if (isTvBookmarked(tv)) {
        return prevBookmarkedMovies.filter((m) => m.id !== tv.id);
      } else {
        return [...prevBookmarkedMovies, tv];
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isIpadAir, setIsIpadAir] = useState(
    window.innerWidth <= 1024 && !isMobile
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsIpadAir(window.innerWidth <= 1024 && !isMobile);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={isMobile ? 50 : isIpadAir ? 50 : 25}
      dynamicHeight={false}
    >
      {Tvseries.map((tv) => (
        <div key={tv.id}>
          <img
            src={isTvBookmarked(tv) ? bookmarkicon : unbookmarkedicon}
            className="bookmark-button"
            onClick={() => handleBookmarkClick(tv)}
            alt="bookmarked"
          />
          <Link
            to={`/home/dashboard/tvdetails/${tv.id}`}
            className="image-link"
          >
            <img
              src={`${IMAGE_BASE_URL}${tv.poster_path}`}
              alt={`${tv.title} Poster`}
              className="trending-images"
            />
          </Link>
          <div className="movie-details">
            {getYear(tv.first_air_date)}
            <span className=".">.</span>
            <img src={tvImage} alt="tvimage" className="tv-image" />
            {tv.media_type || "tv"}
          </div>
          <h4 className="movie-title">{tv.name}</h4>
        </div>
      ))}
    </Carousel>
  );
};

export default TvCarousel;
