import React from "react";
import InputField from "../inputfeild/InputFeild";
import Button from "../button/Button";
import searchicon from "../../assets/homepageimages/search-normal.png";
import "./SearchContainerShared.css";

interface SearchcontainerProps {
  placeholder: string;
}

const Searchcontainer: React.FC<SearchcontainerProps> = ({ placeholder }) => {
  const handleSearch = () => {};

  return (
    <div>
      <div className="search-container">
        <img src={searchicon} alt="search" />
        <InputField
          label={""}
          type={""}
          placeholder={placeholder}
          className="feild-style"
        />
        <Button
          label="search"
          className="search-button"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default Searchcontainer;
