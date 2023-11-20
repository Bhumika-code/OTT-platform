import React, { useState } from "react";
import InputField from "../inputfeild/InputFeild";
import Button from "../button/Button";
import searchicon from "../../assets/homepageimages/search-normal.png";
import "./SearchBar.css";

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
        placeholder={placeholder}
        className="feild-style"
        value={query}
        onChange={handleInputChange}
      />

      <Button
        label="search"
        className="search-button"
        onClick={handleSearchClick}
        color={buttonColor}
      />
    </div>
  );
}

export default SearchBar;
export type { SearchBarProps };
