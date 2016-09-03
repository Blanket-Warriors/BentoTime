import React from "react";
import { bindAll, omit } from "lodash";
import combine from "renderer/utilities/combineClasses";

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: this.props.src };
  }

  _handleError() {
    if(this.state.src !== this.props.fallback) {
      this.setState({ src: this.props.fallback });
    }
  }

  render() {
    const props = omit(this.props, ["src", "onError", "fallback"]);
    props.src = this.state.src;
    props.onError = this._handleError.bind(this);
    props.className = combine(this.props.className, "image");
    return <img {...props} />;
  }
}

Img.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string,
  className: React.PropTypes.string,
  fallback: React.PropTypes.string
};

Img.defaultProps = {
  src: "",
  alt: "",
  className: "",
  fallback: ""
};

export default Img;
