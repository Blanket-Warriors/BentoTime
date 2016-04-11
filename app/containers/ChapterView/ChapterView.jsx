import React from "react";
import { map } from "lodash";

import PageList from "app/components/PageList";
import { Link } from "react-router";

const ChapterView = function ChapterView({ chapter, book }) {
  if( !book || !chapter ){ return <div className="chapter-view">loading...</div>; }

  return (
    <div className="chapter-view">
      <h1 className="chapter-view__title">{chapter.title}</h1>
      <Link to={"/book/" + book.id} className="chapter-view__back">Back</Link>
      <PageList pages={chapter.pages}/>
    </div>
  );
};

export default ChapterView;
