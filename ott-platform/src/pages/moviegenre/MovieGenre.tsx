import React, { useEffect, useState } from "react";
import "./MovieGenre.css";
import { Link } from "react-router-dom";
import { getMovieGenres } from "../../services/MovieGenreList";
import Search from "../searchresults/SearchResult";
import SVGLoader from "../../components/SvgLoader";
interface Movie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  media_type: string;
}

interface MovieGenreProps {
  genreColors?: { genre: string; color: string }[];
}

const MovieGenre: React.FC<MovieGenreProps> = ({ genreColors = [] }) => {
  const [genres, setGenres] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieGenres()
      .then((response) => {
        setGenres(response.data.genres);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Search />
      {loading ? (
        <div className="loader-container">
          <SVGLoader />
        </div>
      ) : (
        <div className="grid-container">
          {genres.map((genre, index) => {
            const genreColor = genreColors.find(
              (item) => item.genre.toLowerCase() === genre.name.toLowerCase()
            );

            return (
              <Link key={genre.id} to={`/home/movie/genrecategory/${genre.id}`}>
                <button
                  key={genre.id}
                  className={
                    index % 2 === 0
                      ? "category-button"
                      : "category-second-button"
                  }
                  style={{
                    backgroundColor: genreColor
                      ? genreColor.color
                      : "defaultColor",
                  }}
                >
                  {genre.name}
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieGenre;
export type { MovieGenreProps };
