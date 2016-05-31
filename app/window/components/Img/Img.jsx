import React from "react";
import { bindAll, omit } from "lodash";

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
    const props = omit(this.props, ["src", "onError"]);
    props.src = this.state.src;
    props.onError = this._handleError.bind(this);
    props.className = this.props.className + " image";
    return <img {...props} />;
  }
}

Img.propTypes = {
  src: React.PropTypes.string.isRequired,
  fallback: React.PropTypes.string,
  alt: React.PropTypes.string
};

Img.defaultProps = {
  fallback: undefined,
  alt: undefined
};

export default Img;
