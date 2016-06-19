import React, { Component, PropTypes } from "react";
import { bind, debounce } from "lodash";

import combine from "renderer/utilities/combineClasses";
import SearchBar from "renderer/components/SearchBar";
import BookList from "renderer/components/BookList";

class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: "",
      dateFilter: null
    };

    this.onSearch = bind(this.onSearch, this);
  }

  onSearch(event) {
    debounce(function updateSearchState(searchFilter) {
      this.setState({ searchFilter });
    }, 750).call(this, event.target.value);
  }

  render() {
    const { library, className } = this.props;
    const { searchFilter, dateFilter } = this.state;

    if(!library.books || library.isFetching) {
      return (
        <h3 className={combine("library-view", "library-view--loading", className)}>
          loading...
        </h3>
      );
    }

    return (
      <div className={combine("library-view", className)}>
        <SearchBar
          className="library-view__search"
          onChange={this.onSearch}
        />
        <BookList
          className="library-view__books"
          books={library.books}
          searchFilter={searchFilter}
          onlyShowBookmarks={searchFilter.length === 0}
          dateFilter={dateFilter}
        />
      </div>
    );
  }
}

LibraryView.propTypes = {
  library: PropTypes.object.isRequired,
  className: PropTypes.string
};

LibraryView.defaultProps = {
  library: {},
  className: ""
};

export default LibraryView;
