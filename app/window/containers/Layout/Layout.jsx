import React, { Component, PropTypes } from "react";
import { find, debounce, cloneDeep } from "lodash";
import { connect } from "react-redux";
import shouldUpdate from "app/utilities/shouldUpdate";

import { fetchLibrary, fetchBook, fetchChapter } from "app/data/actions";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.update = debounce(function update(params) {
      const bookid = params.bookid || this.props.params.bookid;
      const chapterid = params.chapterid || this.props.params.chapterid;
      this.updateLibrary(this.props.library)
        .then(() => this.updateBook(this.props, bookid))
        .then(() => this.updateChapter(this.props, bookid, chapterid));
    }, 100);
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

  updateLibrary(params) {
    const { dispatch, library } = this.props;
    return shouldUpdate(library) ? dispatch(fetchLibrary()) : Promise.resolve();
  }

  updateBook(state, bookid) {
    if(!state.library.books || !bookid) {
      return Promise.resolve();
    }

    const { dispatch } = this.props;
    const book = find(state.library.books, { id: bookid });
    return shouldUpdate(book) ? dispatch(fetchBook(book)) : Promise.resolve();
  }

  updateChapter(state, bookid, chapterid) {
    if(!state.library.books || !bookid || !chapterid) {
      return Promise.resolve();
    }

    const { dispatch } = this.props;
    const book = find(state.library.books, { id: bookid });
    const chapter = find(book.chapters, { id: chapterid });
    return shouldUpdate(chapter) ? dispatch(fetchChapter(book, chapter)) : Promise.resolve();
  }

  render() {
    const { library, user } = this.props;
    const { bookid, chapterid, pageid } = this.props.params;

    const hasBook = Boolean(library.books && bookid);
    const book = hasBook ? library.books[bookid] : undefined;

    const hasChapter = Boolean(book && book.chapters && chapterid);
    const chapter = hasChapter ? find(book.chapters, { id: chapterid }) : undefined;

    return (
      <div className="layout">
        {React.cloneElement(this.props.children, { library, user, book, chapter })}
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
