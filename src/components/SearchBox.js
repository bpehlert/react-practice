import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        onChange={onSearchChange}
        className="searchField"
        placeholder="Search members"
      />
    </div>
  );
};

export default SearchBox;
