import React from "react";

const SearchField = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="searchField"
        type="text"
        placeholder="Search members..."
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchField;
