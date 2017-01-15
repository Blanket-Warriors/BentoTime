import React, { Component, PropTypes } from "react";
import _, { find, debounce, cloneDeep } from "lodash";
import { connect } from "react-redux";
import combine from "renderer/utilities/combineClasses";
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
    if(shouldUpdate(library)) {
      return this.props.dispatch(fetchLibrary());
    }
    return Promise.resolve();
  }

  updateBook(library, bookid) {
    if(!library.books || !bookid) { return Promise.resolve(); }

    const book = find(library.books, { id: bookid });
    if(shouldUpdate(book)) {
      return this.props.dispatch(fetchBook(book));
    }
    return Promise.resolve();
  }

  updateChapter(library, bookid, chapterid) {
    if(!library.books || !bookid || !chapterid) { return Promise.resolve(); }

    const book = find(library.books, { id: bookid });
    const chapter = find(book.chapters, { id: chapterid });
    if(shouldUpdate(chapter)) {
      return this.props.dispatch(fetchChapter(book, chapter));
    }
    return Promise.resolve();
  }

  updateBookmarks(library, shouldUpdateBookmarks) {
    if(!shouldUpdateBookmarks){ return Promise.resolve(); }

    const bookmarks = _(library.books)
      .filter(book => book.bookmarked && shouldUpdate(book))
      .map(book => this.props.dispatch(fetchBook(book)))
      .value();

    return Promise.all(bookmarks);
  }

  render() {
    const { dispatch, className, library, params } = this.props;
    const { bookid, chapterid, pageid } = params;

    const bookExists = Boolean(library.books && bookid);
    const book = bookExists ? library.books[bookid] : undefined;

    const chapterExists = Boolean(book && book.chapters && chapterid);
    const chapter = chapterExists ? find(book.chapters, { id: chapterid }) : undefined;

    return (
      <div className={combine("layout", className)}>
        {React.cloneElement(this.props.children, { library, book, chapter, dispatch })}
      </div>
    );
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
  library:  PropTypes.object,
  params:   PropTypes.object
};

Layout.defaultProps = {
  dispatch: function(){},
  className: "",
  library: {},
  params: {}
};

// Attaches an addition export so that we can test the component without Redux
export const unconnected = Layout;

export default connect(function mapStateToProps(state) {
  const props = {
    library: cloneDeep(state.library)
  };
  return props;
})(Layout);
