import React from "react";

const SearchBox = ({searchChange}) => {
  console.log(searchChange);
  return (
    <div className="pa2">
      <input onChange={searchChange} className="ba pa3 bw1 b--blue bg-washed-green" type="search" placeholder="Search Robots" />
    </div>
  );
};

export default SearchBox;
