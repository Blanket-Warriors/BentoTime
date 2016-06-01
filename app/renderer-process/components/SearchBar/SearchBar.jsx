import React from "react";
import combine from "app/renderer-process/utilities/combineClasses";

const SearchBar = function({ type, onChange, placeholder, className }) {
  return (
    <div className={combine("search-bar", className)}>
      <input
        className="search-bar__input"
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

SearchBar.propTypes = {
};

SearchBar.defaultProps = {
  onChange: function(){},
  placeholder: "Search...",
  type: "search"
};

export default SearchBar;
