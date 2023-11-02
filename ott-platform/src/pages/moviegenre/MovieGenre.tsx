import React, { useEffect, useState } from "react";

import "./MovieGenre.css";
import { Link } from "react-router-dom";
import { getMovieGenres } from "../../services/MovieGenreList";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";
interface Movie {
  id: number;
  title: string;
  name: String;
  poster_path: string;
  release_date: string;
  media_type: string;
}

const MovieGenre: React.FC = () => {
  const [genres, setGenres] = useState<Movie[]>([]);

  useEffect(() => {
    getMovieGenres()
      .then((response) => setGenres(response.data.genres))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <Searchcontainer placeholder="search for movies" />
      <div className="grid-container">
        {genres.map((genre, index) => (
          <Link to={`/home/movie/genrecategory/${genre.id}`}>
            <button
              key={genre.id}
              className={
                index % 2 === 0 ? "category-button" : "category-second-button"
              }
            >
              {genre.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieGenre;
