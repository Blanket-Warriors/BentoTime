import React from "react";
import combine from "renderer/utilities/combineClasses";

const Button = function(props) {
  return <button {...props} className={combine("button", props.className)} />;
};

Button.propTypes = {
  className: React.PropTypes.string
};

Button.defaultProps = {
  className: ""
};

export default Button;
