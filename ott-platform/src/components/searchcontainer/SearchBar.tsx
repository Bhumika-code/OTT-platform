import React, { useState } from "react";
import InputField from "../inputfeild/InputFeild";
import Button from "../button/Button";
import searchicon from "../../assets/homepageimages/search-normal.png";
import "./SearchBar.css";
import ellipseIcon from "../../assets/images/Ellipse 2.svg";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutPopup from "../logoutpopup/LogoutPopup";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  value?: string;
  buttonColor?: string;
}

function SearchBar({
  onSearch,
  placeholder = "Search for movies or TV series",
  value = "",
  buttonColor = "",
}: SearchBarProps) {
  const [query, setQuery] = useState(value);

  const navigate = useNavigate();
  const [isLogoutPopupOpen, setLogoutPopupOpen] = useState(false);

  const handleLogoutClick = () => {
    setLogoutPopupOpen(true);
  };

  const handleClosePopup = () => {
    setLogoutPopupOpen(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="profile-search-container">
      <div className="profile-icon">
        <img
          src={ellipseIcon}
          alt="user-logo"
          className="nav-bar"
          onClick={handleLogoutClick}
        />
        <span className="media-name">Hello,</span>
        <LogoutPopup isOpen={isLogoutPopupOpen} onClose={handleClosePopup} />
      </div>
      <div className="search-container">
        <div className="search-input-container">
          <img src={searchicon} alt="search" className="search-icon" />
          <InputField
            label={""}
            type={""}
            placeholder={placeholder}
            className="feild-style"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <Button
          label="search"
          className="search-button"
          onClick={handleSearchClick}
          color={buttonColor}
        />
      </div>
    </div>
  );
}

export default SearchBar;
export type { SearchBarProps };
