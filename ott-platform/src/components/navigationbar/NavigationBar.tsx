import React from "react";
import "./NavigationBar.css";
import movieImage from "../../assets/images/logo.svg";
import dashBoard from "../../assets/images/Dashboardsvg.svg";
import movie from "../../assets/images/Moviesvg.svg";
import tvSeries from "../../assets/images/tvseriessvg.svg";
import bookMark from "../../assets/images/bookmarksvg.svg";
import ellipseIcon from "../../assets/images/Ellipse 2.svg";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navigation-container">
      <ul className="home-images">
        <li>
          <a href="/home">
            <img src={movieImage} alt="movieimage" className="nav-bar" />
          </a>
        </li>
        <li>
          <a href="/home/dashboard">
            <img src={dashBoard} alt="dashboard" className="nav-bar" />
          </a>
        </li>
        <li>
          <a href="/home/movie">
            <img src={movie} alt="movie" className="nav-bar" />
          </a>
        </li>
        <li>
          <a href="/home/tvseries">
            <img src={tvSeries} alt="tvseries" className="nav-bar" />
          </a>
        </li>
        <li>
          <a href="/home/bookmark">
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
  );
};

export default NavigationBar;
