import React from "react";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import "./HomePage.css";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="home-container" data-testid="navigation-bar">
      <NavigationBar />
      <div className="home-div" data-testid="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
