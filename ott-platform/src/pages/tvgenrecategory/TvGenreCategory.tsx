import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tvImage from "../../assets/images/tvimage.svg";
import { getTvseriesByGenre } from "../../services/TvGenreListCategory";
import { useParams } from "react-router-dom";
import { toggleBookmarkTv, getBookmarks } from "../../services/BookmarkService";
import Search from "../searchresults/SearchResult";
import "./TvGenreCategory.css";
import bookmarkicon from "../../assets/images/bookmarkactivesvg.svg";
import unbookmarkedicon from "../../assets/images/bookmarkiconsvg.svg";
import SVGLoader from "../../components/SvgLoader";
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
  const [loading, setLoading] = useState(true);
  const [bookmarkedMovies, setBookmarkedMovies] = React.useState<Tv[]>(
    getBookmarks().filter((item: Tv) => item.release_date)
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
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching popular movies: ", error);
          setLoading(false);
        });
    }
  };
  const isTvBookmarked = (tv: Tv): boolean => {
    return getBookmarks().some((item: Tv) => item.id === tv.id);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <SVGLoader />
        </div>
      ) : (
        <>
          <Search />
          <div className="genre-container">
            {TvGeneres.map((Tv) => (
              <div key={Tv.id}>
                <img
                  src={isTvBookmarked(Tv) ? bookmarkicon : unbookmarkedicon}
                  className="tv-bookmark-icon"
                  onClick={() => handleBookmarkClick(Tv)}
                  alt="bookmarked"
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
                  {new Date(Tv.first_air_date).getFullYear()}
                  <span className=".">.</span>
                  <img src={tvImage} alt="movieimage" className="tv-image" />
                  {Tv.media_type || "tv"}
                </div>
                <h4 className="movie-title">{Tv.name}</h4>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
