import React from "react";
import combine from "renderer/utilities/combineClasses";

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
  className: React.PropTypes.string,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string
};

SearchBar.defaultProps = {
  className: "",
  onChange: function(){},
  placeholder: "Search...",
  type: "search"
};

export default SearchBar;
