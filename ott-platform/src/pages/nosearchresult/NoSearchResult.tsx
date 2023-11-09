import React from "react";
import { useParams } from "react-router-dom";
import "./NoSearchResult.css";
import arrow from "../../assets/images/arrow_back_ios.svg";

const NoSearchResult: React.FC = () => {
  const { query } = useParams();
  return (
    <div className="no-results-page">
      <div className="arrow-search">
        <a href="/home/dashboard">
          <img src={arrow} alt="arrow" />
        </a>
        <p className="no-result">No results found for '{query}'</p>
      </div>
    </div>
  );
};

export default NoSearchResult;
