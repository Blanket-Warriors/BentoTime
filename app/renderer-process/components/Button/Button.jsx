import React from "react";

const Button = function(props) {
  return <button className="button" {...props} />;
};

Button.defaultProps = {
  className: ""
};

export default Button;
