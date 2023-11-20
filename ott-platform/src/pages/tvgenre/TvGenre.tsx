import React, { useEffect, useState } from "react";
import "./TvGenre.css";
import { Link } from "react-router-dom";
import Search from "../searchresults/SearchResult";
interface Tv {
  id: number;
  title: string;
  name: String;
  poster_path: string;
  release_date: string;
  media_type: string;
}
interface TvGenreProps {
  genreColors?: { genre: string; color: string }[];
}

const TvGenre: React.FC<TvGenreProps> = ({ genreColors = [] }) => {
  const [genres, setGenres] = useState<Tv[]>([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en`
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <Search />
      <div className="grid-container">
        {genres.map((genre, index) => {
          const genreColor = genreColors.find(
            (item) => item.genre.toLowerCase() === genre.name.toLowerCase()
          );
          return (
            <Link to={`/home/tvseries/tvgenrecategory/${genre.id}`}>
              <button
                key={genre.id}
                className={
                  index % 2 === 0
                    ? "category-tvseries-button"
                    : "category-tvseries-second-button"
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
    </div>
  );
};

export default TvGenre;
export type { TvGenreProps };
