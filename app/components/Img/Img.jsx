import React from "react";
import { bindAll } from "lodash";

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: this.props.src };
    bindAll(this, ["_handleError"]);
  }

  _handleError() {
    this.setState({ src: this.props.fallback });
  }

  render() {
    return (
      <img src={ this.state.src } onError={ this._handleError } {...this.props} />
    );
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
