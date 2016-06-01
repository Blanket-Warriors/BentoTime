import React from "react";

const Link = function(props) {
  return <Link className={"nav-link " + props.className} {...props} />;
};

Link.propTypes = {
  to: React.PropTypes.string.isRequired,
  query: React.PropTypes.object,
  hash: React.PropTypes.string,
  path: React.PropTypes.string,
  className: React.PropTypes.string
};

Link.defaultProps = {
  to: "/"
};

export default Link;
