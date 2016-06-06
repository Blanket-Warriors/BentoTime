import React, { Component, PropTypes } from "react";
import { setBookmark } from "app/renderer-process/data/actions/bookActions";
import combineClasses from "app/renderer-process/utilities/combineClasses";

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
    const classes = combineClasses("bookmark-icon", isBookmarked ? "bookmarkicon--bookmarked" : "");

    return <img
      className={classes}
      src={`assets/images/bookmark/${icon}`}
      onClick={this.onClick.bind(this)}
    />;
  }
}

export default BookmarkIcon;
