import React, { Component } from 'react';
import BookList from 'app/components/BookList';
import { bind, debounce } from 'lodash';

class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = { searchFilter: '' };

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

    if(library.lastUpdated) {
      return (
        <div className="library-view">
          <input
            className="library-view__search"
            type="search"
            onChange={this.onSearch}
            placeholder="Search..."
          />
          <BookList books={library.books} filter={this.state.searchFilter} />
        </div>
      );
    }
    return <div>loading...</div>;
  }
}

LibraryView.defaultProps = {
  library: {}
};

export default LibraryView;
