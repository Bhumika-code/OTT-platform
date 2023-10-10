import React from "react";
import NavigationBar from "../../components/navigationbar/NavigationBar";
import './HomePage.css'
import { Outlet } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <NavigationBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
