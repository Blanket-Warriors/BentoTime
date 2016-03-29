import React from 'react';
import { map } from 'lodash';
import ChapterListItem from 'app/components/ChapterListItem';

const ChapterList = function({ book }) {
  const mappedChapters = map(book.chapters, chapter => {
    return (
      <ChapterListItem
        key={chapter.id}
        chapter={chapter}
        book={book}
      />
    );
  });
  return <ul className="chapter-list">{mappedChapters}</ul>;
};

ChapterList.propTypes = {
  book: React.PropTypes.object.isRequired
};

export default ChapterList;
