import React from "react";
import Img from "renderer/components/Img";
import combine from "renderer/utilities/combineClasses";

const PageListItem = function({ id, src, className }) {
  return (
    <li id={id} className={combine("page-list-item", className)}>
      <Img
        className="page-list-item__image"
        src={src}
        alt={`page-${id}`}
      />
    </li>
  );
};

PageListItem.propTypes = {
  id: React.PropTypes.number.isRequired,
  src: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
};

PageListItem.defaultProps = {
  id: "",
  src: "",
  className: ""
};

export default PageListItem;
