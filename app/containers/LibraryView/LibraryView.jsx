import React, { Component } from "react";
import { bind, debounce } from "lodash";

import SearchBar from "app/components/SearchBar";
import BookList from "app/components/BookList";

class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = { searchFilter: "" };

    this.onSearch = bind(this.onSearch, this);
    this.updateSearchState = debounce( searchFilter => {
      this.setState({searchFilter: searchFilter});
    }, 350);
  }

  onSearch(event) {
    const searchFilter = event.target.value;
    this.updateSearchState(searchFilter);
  }

  render() {
    const library = this.props.library;
    const searchFilter = this.state.searchFilter;

    if(!library.lastUpdated) {
      return <div className="library-view__loading">loading...</div>;
    }

    return (
      <div className="library-view">
        <SearchBar className="library-view__search" onChange={this.onSearch} />
        <BookList books={library.books} filter={this.state.searchFilter} />
      </div>
    );
  }
}

LibraryView.defaultProps = {
  library: {}
};

export default LibraryView;
