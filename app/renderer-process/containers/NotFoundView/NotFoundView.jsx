import React from "react";
import combine from "renderer/utilities/combineClasses";

const NotFoundView = function NotFoundView({ className }) {
  return (
    <h3 className={combine("not-found-view", className)}>
      Page Not Found
    </h3>
  );
};

NotFoundView.propTypes = {
  className: React.PropTypes.string
};

NotFoundView.defaultProps = {
  className: ""
};

export default NotFoundView;
