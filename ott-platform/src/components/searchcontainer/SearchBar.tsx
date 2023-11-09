import React, { useState } from "react";
import InputField from "../inputfeild/InputFeild";
import Button from "../button/Button";
import searchicon from "../../assets/homepageimages/search-normal.png";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <img src={searchicon} alt="search" className="search-icon" />
      <InputField
        label={""}
        type={""}
        placeholder={"Search for movies or TV series"}
        className="feild-style"
        value={query}
        onChange={handleInputChange}
      />

      <Button
        label="search"
        className="search-button"
        onClick={handleSearchClick}
      />
    </div>
  );
}

export default SearchBar;
