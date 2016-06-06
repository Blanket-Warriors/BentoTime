import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import { map } from "lodash";

import { setChapterViewed } from "app/renderer-process/data/actions/chapterActions";
import combineClasses from "app/renderer-process/utilities/combineClasses";
import PageList from "app/renderer-process/components/PageList";

class ChapterView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, book, chapter } = this.props;
    dispatch(setChapterViewed(book, chapter, true));
  }

  render() {
    const { book, chapter } = this.props;

    if( !book || !chapter ){
      return <h3 className="chapter-view--loading">loading...</h3>;
    }

    return (
      <div className="chapter-view">
        <Link to={"/book/" + book.id} className="chapter-view__back">Back</Link>
        <PageList className="chapter-view__chapters" pages={chapter.pages} />
      </div>
    );
  }
}

export default ChapterView;
