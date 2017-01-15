import React, { Component, PropTypes } from "react";
import { setBookmark } from "renderer/data/actions/bookActions";
import combine from "renderer/utilities/combineClasses";

class BookmarkIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: props.book.bookmarked
    };
  }

  onClick() {
    const { book, dispatch } = this.props;
    this.setState({ bookmarked: !this.state.bookmarked });
    setTimeout(() => {
      dispatch(setBookmark(book, this.state.bookmarked));
    }, 0);
  }

  render() {
    const isBookmarked = this.state.bookmarked;
    const icon = isBookmarked ? "full_heart.svg" : "empty_heart.svg";
    const bookmarkClass = isBookmarked ? "bookmark-icon--bookmarked" : "";

    return <img
      className={combine("bookmark-icon", bookmarkClass, this.props.className)}
      src={`assets/images/bookmark/${icon}`}
      onClick={this.onClick.bind(this)}
    />;
  }
}

BookmarkIcon.propTypes = {
  book: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
};

BookmarkIcon.defaultProps = {
  book: null,
  dispatch: function(){},
  className: ""
};

export default BookmarkIcon;
