import React from "react";
import Img from "app/components/Img";

const PageListItem = function({ id, src }) {
  return (
    <li className="page-list-item" id={id}>
      <Img
        className="page-list-item__image"
        src={src}
        alt={`page-${id}`}
      />
    </li>
  );
};

PageListItem.propTypes = {
  src: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
};

export default PageListItem;
