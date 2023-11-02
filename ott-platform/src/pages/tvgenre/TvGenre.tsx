import React, { useEffect, useState } from "react";

import "./TvGenre.css";
import { Link } from "react-router-dom";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";
interface Tv {
  id: number;
  title: string;
  name: String;
  poster_path: string;
  release_date: string;
  media_type: string;
}

const TvGenre: React.FC = () => {
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
      <Searchcontainer placeholder="search for tvseries" />
      <div className="grid-container">
        {genres.map((genre, index) => (
          <Link to={`/home/tvseries/tvgenrecategory/${genre.id}`}>
            <button
              key={genre.id}
              className={
                index % 2 === 0
                  ? "category-tvseries-button"
                  : "category-tvseries-second-button"
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

export default TvGenre;
