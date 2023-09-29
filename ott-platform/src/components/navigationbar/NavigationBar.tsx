
import React from "react";
import './NavigationBar.css'
import movieImage from '../../assets/images/logo.png'
import dashBoard from '../../assets/images/Dashboard.png'
import movie from '../../assets/images/Movie.png'
import tvSeries from '../../assets/images/TV Series.png'
import bookMark from '../../assets/images/Bookmark.png'
import ellipseIcon from '../../assets/images/Ellipse 2.png'

const NavigationBar: React.FC = () => {
  return (

    <div className="navigation-container">
      <nav >
        <ul>
          <li>
            <a href="/">
              <img src={movieImage} alt="movieimage" className="nav-bar" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={dashBoard} alt="dashboard" className="nav-bar" />

            </a>
          </li>
          <li>
            <a href="/">
              <img src={movie} alt="movie" className="nav-bar" />

            </a>
          </li>
          <li>
            <a href="/">
              <img src={tvSeries} alt="tvseries" className="nav-bar" />

            </a>
          </li>
          <li>
            <a href="/">
              <img src={bookMark} alt="bookmark" className="nav-bar" />

            </a>
          </li>
          <li>
            <a href="/">
              <img src={ellipseIcon} alt="ellipse" className="nav-bar" />

            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
