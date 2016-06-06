import React, { Component } from "react";
import { bind, debounce } from "lodash";

import SearchBar from "app/renderer-process/components/SearchBar";
import BookList from "app/renderer-process/components/BookList";

class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: "",
      dateFilter: null
    };

    this.onSearch = bind(this.onSearch, this);
    this.updateSearchState = debounce( searchFilter => {
      this.setState({searchFilter: searchFilter});
    }, 750);
  }

  onSearch(event) {
    const searchFilter = event.target.value;
    this.updateSearchState(searchFilter);
  }

  render() {
    const library = this.props.library;
    const searchFilter = this.state.searchFilter;
    const searchFilterExists = searchFilter.length > 0;
    const bookmarkFilter = !searchFilterExists;
    const dateFilter = searchFilterExists ? this.state.dateFilter : "week";

    if(!library.lastUpdated) {
      return <h3 className="library-view__loading">loading...</h3>;
    }

    return (
      <div className="library-view">
        <SearchBar className="library-view__search" onChange={this.onSearch} />
        <BookList
          className="library-view__books"
          books={library.books}
          searchFilter={searchFilter}
          bookmarkFilter={bookmarkFilter}
          dateFilter={null}
        />
      </div>
    );
  }
}

LibraryView.defaultProps = {
  library: {}
};

export default LibraryView;