import React, { useState } from "react";
import "./NavigationBar.css";
import movieImage from "../../assets/images/logo.svg";
import dashBoard from "../../assets/images/Dashboardsvg.svg";
import movie from "../../assets/images/Moviesvg.svg";
import tvSeries from "../../assets/images/tvseriessvg.svg";
import bookMark from "../../assets/images/bookmarksvg.svg";
import ellipseIcon from "../../assets/images/Ellipse 2.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../button/Button";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const logout = () => {
    console.log("Logging out...");
    navigate("/signin");
  };
  const cancel = () => {
    setShowOptions(false);
  };
  const activeStyle = {
    filter: "brightness(0) invert(1)",
  };

  return (
    <nav className="navigation-container">
      <ul className="home-images">
        <li>
          <img src={movieImage} alt="movieimage" className="nav-bar" />
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
          <img
            src={ellipseIcon}
            alt="user-logo"
            className="nav-bar"
            onClick={() => setShowOptions(true)}
          />
          {showOptions && (
            <div className="options">
              <Button
                className="nav-logout-button"
                onClick={logout}
                label="Logout"
                color=""
              />

              <br />
              <Button
                onClick={cancel}
                label="Cancel"
                color=""
                className="cancel-button"
              />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
