import React, { useState, useEffect } from "react";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./GenreCategory.css";
import movieImage from "../../assets/images/Vector (1).svg";
import { getMoviesByGenre } from "../../services/MovieGnereListCategory";
import { useParams } from "react-router-dom";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";
import { toggleBookmark, getBookmarks } from "../../services/BookmarkService";
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
  const handleBookmarkClick = (movie: Movie) => {
    toggleBookmark(movie);
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
          {movieGeneres.map((movie) => (
            <div key={movie.id}>
              <BiBookmark
                className="bookmark-icon-movie-genre"
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
                <img
                  src={movieImage}
                  alt="movieimage"
                  className="movie-image"
                />
                {movie.media_type}
              </div>
              <h4 className="movie-title">{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreCategory;
