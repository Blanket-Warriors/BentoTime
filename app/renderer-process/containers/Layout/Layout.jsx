import React, { Component, PropTypes } from "react";
import _, { find, debounce, cloneDeep } from "lodash";
import { connect } from "react-redux";
import shouldUpdate from "renderer/utilities/shouldUpdate";

import { fetchLibrary, fetchBook, fetchChapter } from "renderer/data/actions";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.update = debounce(function update(params) {
      const library = this.props.library;
      const bookid = params.bookid || this.props.params.bookid;
      const chapterid = params.chapterid || this.props.params.chapterid;
      this.updateLibrary(library)
        .then(() => this.updateBook(library, bookid))
        .then(() => this.updateChapter(library, bookid, chapterid))
        .then(() => this.updateBookmarks(library, !bookid && !chapterid));
    }.bind(this), 1000);
  }

  componentWillMount() {
    this.update(this.props.params);
  }

  // Update our library whenever our location changes
  componentWillReceiveProps(nextProps) {
    const currentLocation = this.props.location.pathname;
    const nextLocation = nextProps.location.pathname;
    if(currentLocation !== nextLocation) {
      this.update(nextProps.params);
    }
  }

  updateLibrary(library) {
    const { dispatch } = this.props;
    return shouldUpdate(library) ? dispatch(fetchLibrary()) : Promise.resolve();
  }

  updateBookmarks(library, shouldUpdateBookmarks) {
    const { dispatch } = this.props;
    if(!shouldUpdateBookmarks){ return Promise.resolve(); }

    const bookmarks = _(library.books)
      .filter(book => {
        return book.bookmarked && shouldUpdate(book);
      })
      .map(book => dispatch(fetchBook(book)))
      .value();
    return Promise.all(bookmarks);
  }

  updateBook(library, bookid) {
    if(!library.books || !bookid) {
      return Promise.resolve();
    }

    const { dispatch } = this.props;
    const book = find(library.books, { id: bookid });
    return shouldUpdate(book) ? dispatch(fetchBook(book)) : Promise.resolve();
  }

  updateChapter(library, bookid, chapterid) {
    if(!library.books || !bookid || !chapterid) {
      return Promise.resolve();
    }

    const { dispatch } = this.props;
    const book = find(library.books, { id: bookid });
    const chapter = find(book.chapters, { id: chapterid });
    return shouldUpdate(chapter) ? dispatch(fetchChapter(book, chapter)) : Promise.resolve();
  }

  render() {
    const { library, user, dispatch } = this.props;
    const { bookid, chapterid, pageid } = this.props.params;

    const hasBook = Boolean(library.books && bookid);
    const book = hasBook ? library.books[bookid] : undefined;

    const hasChapter = Boolean(book && book.chapters && chapterid);
    const chapter = hasChapter ? find(book.chapters, { id: chapterid }) : undefined;

    return (
      <div className="layout">
        {React.cloneElement(this.props.children, { library, user, book, chapter, dispatch })}
      </div>
    );
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  library:  PropTypes.object,
  params:   PropTypes.object,
  routing:  PropTypes.object,
  user:     PropTypes.object
};

Layout.defaultProps = {
  library: {},
  params: {},
  routing: {},
  user: {}
};

function mapStateToProps(state) {
  return {
    library: cloneDeep(state.library),
    user: cloneDeep(state.user),
    routing: cloneDeep(state.routing)
  };
}

// Attaches an addition export so that we can test the component without Redux
export const unconnected = Layout;

export default connect(mapStateToProps)(Layout);
