import React, { useState, useEffect } from "react";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import movieImage from "../../assets/images/Vector (1).svg";
import { getTvseriesByGenre } from "../../services/TvGenreListCategory";
import { useParams } from "react-router-dom";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";
import { toggleBookmarkTv, getBookmarks } from "../../services/BookmarkService";
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

interface Tv {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  first_air_date: string;
}

const Movie: React.FC = () => {
  const { id } = useParams();
  const [TvGeneres, setTvGeneres] = useState<Tv[]>([]);
  const handleBookmarkClick = (tv: Tv) => {
    toggleBookmarkTv(tv);
  };

  useEffect(() => {
    if (id) {
      fetchTvseries();
    }
  }, [id]);

  const fetchTvseries = () => {
    if (id) {
      getTvseriesByGenre(id)
        .then((response) => {
          if (response.status === 200) {
            setTvGeneres(response.data.results);
          } else {
            console.error("Failed to fetch popular movies");
          }
        })
        .catch((error) => {
          console.error("Error fetching popular movies: ", error);
        });
    }
  };

  return (
    <div>
      <Searchcontainer />

      <div className="genre-container">
        <div className="genre-container">
          {TvGeneres.map((Tv) => (
            <div key={Tv.id}>
              <BiBookmark
                className="bookmark-icon-movie-genre"
                onClick={() => handleBookmarkClick(Tv)}
              />
              <Link
                to={`/home/dashboard/tvdetails/${Tv.id}`}
                className="genre-image-link"
              >
                <img
                  src={`${IMAGE_BASE_URL}${Tv.poster_path}`}
                  alt={`${Tv.title} Poster`}
                  className="genre-movie-images"
                />
              </Link>
              <div className="movie-details">
                {Tv.first_air_date}
                <span className=".">.</span>
                <img
                  src={movieImage}
                  alt="movieimage"
                  className="movie-image"
                />
                {Tv.media_type}
              </div>
              <h4 className="movie-title">{Tv.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
