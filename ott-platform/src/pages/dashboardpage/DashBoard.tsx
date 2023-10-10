
import './DashBoard.css';
import React, { useState, useEffect } from "react";
import InputField from "../../components/inputfeild/InputFeild";
import Button from "../../components/button/Button";
import searchicon from '../../assets/homepageimages/search-normal.png';
interface Movie {
  id: number;
  title: string;
  description: string;

}
const DashBoard: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {

    fetchMovies();
  }, [searchQuery]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a134cef085db7d04a3a9704586e6b155&query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  const handleSearch = () => {

    console.log(DashBoard)
    fetchMovies();
  }
  return (
    <div>
      <div className="search-container">
        <img src={searchicon} alt="search" />
        <InputField
          label={''}
          type={''}
          placeholder={'Search for movies or TV series'}
          className="feild-style"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button label="search" className="search-button" onClick={handleSearch} />
      </div>

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
      <div className="trending-movies">
        <p>trending</p>
      </div>
      <div className="popular-movies">
        <p>popular</p>
      </div>
      <div>

      </div>
    </div>
  )
}

export default DashBoard;
