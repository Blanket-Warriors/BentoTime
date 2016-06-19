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

ChapterView.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  book: React.PropTypes.object,
  chapter: React.PropTypes.object,
  className: React.PropTypes.string
};

ChapterView.defaultProps = {
  dispatch: function(){},
  book: null,
  chapter: null,
  className: ""
};

export default ChapterView;
