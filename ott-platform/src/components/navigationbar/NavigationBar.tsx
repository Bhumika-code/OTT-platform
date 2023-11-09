import React from "react";
import "./NavigationBar.css";
import movieImage from "../../assets/images/logo.svg";
import dashBoard from "../../assets/images/Dashboardsvg.svg";
import movie from "../../assets/images/Moviesvg.svg";
import tvSeries from "../../assets/images/tvseriessvg.svg";
import bookMark from "../../assets/images/bookmarksvg.svg";
import ellipseIcon from "../../assets/images/Ellipse 2.svg";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const activeStyle = {
    filter: "brightness(0) invert(1)",
  };

  return (
    <nav className="navigation-container">
      <ul className="home-images">
        <li>
          <NavLink to="/home">
            <img src={movieImage} alt="movieimage" className="nav-bar" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/dashboard">
            <img
              src={dashBoard}
              alt="dashboard"
              className="nav-bar"
              style={
                window.location.pathname === "/home/dashboard"
                  ? activeStyle
                  : {}
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/movie">
            <img
              src={movie}
              alt="movie"
              className="nav-bar"
              style={
                window.location.pathname === "/home/movie" ? activeStyle : {}
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/tvseries">
            <img
              src={tvSeries}
              alt="tvseries"
              className="nav-bar"
              style={
                window.location.pathname === "/home/tvseries" ? activeStyle : {}
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/home/bookmark">
            <img
              src={bookMark}
              alt="bookmark"
              className="nav-bar"
              style={
                window.location.pathname === "/home/bookmark" ? activeStyle : {}
              }
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src={ellipseIcon} alt="ellipse" className="nav-bar" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
