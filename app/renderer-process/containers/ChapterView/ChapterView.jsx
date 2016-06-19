import React, { Component } from "react";
import { Link } from "react-router";

import { setChapterViewed } from "renderer/data/actions/chapterActions";
import combine from "renderer/utilities/combineClasses";
import PageList from "renderer/components/PageList";

class ChapterView extends Component {
  constructor(props) { super(props); }

  componentDidMount() {
    const { book, chapter, dispatch } = this.props;
    dispatch(setChapterViewed(book, chapter, true));
  }

  render() {
    const { book, chapter, className } = this.props;

    if( !book || !chapter || !chapter.pages || !chapter.pages.length ) {
      return (
        <h3 className={combine("chapter-view", "chapter-view--loading", className)}>
          loading...
        </h3>
      );
    }

    return (
      <div className={combine("chapter-view", className)}>
        <Link className="chapter-view__back" to={"/book/" + book.id}>Back</Link>
        <PageList className="chapter-view__pages" pages={chapter.pages} />
      </div>
    );
  }
}

BookView.propTypes = {
  book: React.PropTypes.object.isRequired,
  chapter: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
};

BookView.defaultProps = {
  book: null,
  chapter: null,
  dispatch: function(){},
  className: ""
};

export default ChapterView;
