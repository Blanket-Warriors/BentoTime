import React from "react";
import { map } from "lodash";
import ChapterListItem from "app/renderer-process/components/ChapterListItem";
import combine from "app/renderer-process/utilities/combineClasses";

const ChapterList = function({ book, className }) {
  const mappedChapters = map(book.chapters, chapter => {
    return (
      <ChapterListItem
        key={chapter.id}
        chapter={chapter}
        book={book}
      />
    );
  }).reverse();

  return <ul className={combine("chapter-list", className)}>{mappedChapters}</ul>;
};

ChapterList.propTypes = {
  book: React.PropTypes.object.isRequired
};

ChapterList.defaultProps = {
  className: ""
};

export default ChapterList;
