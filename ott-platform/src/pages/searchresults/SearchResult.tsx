import React from "react";
import Searchcontainer from "../../components/searchcontainer/SearchContanierShared";

const SearchResults: React.FC = () => {
  return (
    <div>
      <Searchcontainer placeholder="search for movies or tvseries" />
    </div>
  );
};

export default SearchResults;
