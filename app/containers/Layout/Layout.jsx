import React, { Component, PropTypes } from 'react';
import { isEmpty, cloneDeep, find } from 'lodash';
import { connect } from 'react-redux';
import { Observable } from 'rx';

import { fetchLibrary, fetchBook, fetchChapter } from 'app/data/actions';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.updateLibrary(this.props.params).subscribe();
  }

  // Update our library whenever our location changes
  componentWillReceiveProps(nextProps) {
    const currentLocation = this.props.location.pathname;
    const nextLocation = nextProps.location.pathname;
    if(currentLocation !== nextLocation) {
      this.updateLibrary(nextProps.params).subscribe();
    }
  }

  updateLibrary(params) {
    const { dispatch, library } = this.props;
    const bookid = params.bookid || this.props.params.bookid;
    const chapterid = params.chapterid || this.props.params.chapterid;

    return (!library.lastUpdated ? dispatch(fetchLibrary()) : Observable.just(this.props))
      .flatMap( () => this.updateBook(this.props, bookid))
      .flatMap( () => this.updateChapter(this.props, bookid, chapterid));
  }

  updateBook(state, bookid) {
    const { dispatch } = this.props;

    if(!state.library.books || !bookid) {
      return Observable.just(state);
    }

    const book = find(state.library.books, { id: bookid });
    const bookNeedsUpdate = !book || !book.lastUpdated;

    if(bookNeedsUpdate) {
      return dispatch(fetchBook(book));
    }
    return Observable.just(state);
  }

  updateChapter(state, bookid, chapterid) {
    const { dispatch } = this.props;

    if(!state.library.books || !bookid || !chapterid) {
      return Observable.just(state);
    }

    const book = find(state.library.books, { id: bookid });
    const chapter = find(book.chapters, { id: chapterid });
    const chapterNeedsUpdate = Boolean(chapter && !chapter.lastUpdated);

    if(chapterNeedsUpdate) {
      return dispatch(fetchChapter(book, chapter));
    }
    return Observable.just(state);
  }

  render() {
    const { library, user } = this.props;
    const { bookid, chapterid, pageid } = this.props.params;

    const shouldFindBook = Boolean(library.books && bookid);
    const book = shouldFindBook ? library.books[bookid] : undefined;

    const shouldFindChapter = Boolean(book && book.chapters && chapterid);
    const chapter = shouldFindChapter ? find(book.chapters, { id: chapterid }) : undefined;

    const shouldFindPage = Boolean(book && chapter && pageid);
    const page = shouldFindPage ? chapter[pageid] : undefined;

    return (
      <div className="layout">
        <h1 className="layout__title">Bentotime</h1>
        {React.cloneElement(this.props.children, { library, user, book, chapter, page })}
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
