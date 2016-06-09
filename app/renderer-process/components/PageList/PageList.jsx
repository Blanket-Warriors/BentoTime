import React from "react";
import { map, isEmpty } from "lodash";
import PageListItem from "renderer/components/PageListItem";
import combine from "renderer/utilities/combineClasses";

const PageList = function({ pages, className }) {
  var mappedPages = "Loading...";
  if(!isEmpty(pages)) {
    mappedPages = map(pages.reverse(), page => {
      return <PageListItem id={page.id} src={page.image} key={page.id} />;
    });
  }
  return <ul className={combine("page-list", className)}>{mappedPages}</ul>;
};

PageList.defaultProps = {
  pages: [],
  className: ""
};

export default PageList;
