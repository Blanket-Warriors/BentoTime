import React from "react";
import { map } from "lodash";

import PageList from "app/components/PageList";
import { Link } from "react-router";

const ChapterView = function ChapterView({ chapter, book }) {
  if( !book || !chapter ){ return <h3 className="chapter-view--loading">loading...</h3>; }

  return (
    <div className="chapter-view">
      <Link to={"/book/" + book.id} className="chapter-view__back">Back</Link>
      <PageList className="chapter-view__chapters" pages={chapter.pages} />
    </div>
  );
};

export default ChapterView;
