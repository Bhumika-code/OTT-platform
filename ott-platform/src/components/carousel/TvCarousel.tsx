import React from "react";
import { Carousel } from "react-responsive-carousel";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./TvCarousel.css";

import movieImage from "../../assets/images/Vector (1).svg";
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
      {Tvseries.map((Tv) => (
        <div key={Tv.id}>
          <BiBookmark className="bookmark-icon" />
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
            <img src={movieImage} alt="movieimage" className="movie-image" />
            {Tv.media_type}
          </div>
          <h4 className="movie-title">{Tv.name}</h4>
        </div>
      ))}
    </Carousel>
  );
};

export default MovieCarousel;
