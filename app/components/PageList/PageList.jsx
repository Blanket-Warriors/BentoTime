import React from "react";
import { map, isEmpty } from "lodash";
import PageListItem from "app/components/PageListItem";

const PageList = function({ pages }) {
  var mappedPages = "Loading...";
  if(!isEmpty(pages)) {
    mappedPages = map(pages.reverse(), page => {
      return <PageListItem id={page.id} src={page.image} key={page.id} />;
    });
  }
  return <ul className="page-list">{mappedPages}</ul>;
};

PageList.defaultProps = {
  pages: {}
};

export default PageList;
