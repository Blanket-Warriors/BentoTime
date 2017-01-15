import React, { PropTypes } from "react";
import { Image } from "zuck";
import combine from "renderer/utilities/combineClasses/combineClasses";

const PageListItem = function({ page, className }) {
  var { id, image, width, height } = page;

  return (
    <li id={id} className={combine("page-list-item", className)}>
      <Image
        className="page-list-item__image"
        src={image}
        alt={`page-${id}`}
        fallback={[]}
        style={{ width, height }}
      />
    </li>
  );
};

PageListItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};

PageListItem.defaultProps = {
  id: "",
  src: "",
  className: ""
};

export default PageListItem;
