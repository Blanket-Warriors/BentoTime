BookList
=========

BookList takes in an object or array of books, and returns a list component that displays the information for those books in the form of [BookListItems](../BookListItem).

#### How to use:

##### With Filter
BookList is very stingy on displaying books, and will only display books matched by the filter. This helps us speed up our application by reducing the amount of components rendered. We filter our `BookList` by passing in a `filter` prop. The `filter` prop is a string that we use to match against the manga titles, ignoring case:

```js
import BookList from 'app/components/BookList';
const myBooks = [/*An array of books*/];
const filterString = "naruto";

<BookList books={myBooks} filter={filterString} />
```

##### Without Filter
The basic usage of the BookList component without a filter is to pass filter a boolean value:

```js
import BookList from 'app/components/BookList';
const myBooks = [/*An array of books*/];

// displays no books
<BookList books={myBooks} filter={false} />

// displays all books
<BookList books={myBooks} filter={true} />
```

#### Props

* `books`: An object or array of [Books](../../data/models/Book)
* `filter`: What we use to filter book titles. As of now, this can be a string or boolean. A boolean can be used to display the entire or none of the list, where a string is used to search through the title of each book.

#### Further Detail
The heart of this code comes from where we create our list of `mappedBooks`:

```
const mappedBooks = _(books)
  .filter(function filterBookList(book) {
    if(typeof filter === "boolean") {
      return filter;
    }

    if(typeof filter === "string" && filter.length > 0) {
      // Assume that if a user only types in `n`, they want something that starts with `n`.
      // Cut-off point for filtering from the beginning is 3 characters.
      if(filter.length <= 3) {
        const matchFromBeginning = new RegExp("^" + filter, "gi");
        return Boolean(book.title.match(matchFromBeginning));
      } else {
        const matchAnywhere = new RegExp(filter, "gi");
        return Boolean(book.title.match(matchAnywhere));
      }
    }

    return false;
  })
  .sortBy("alias")
  .map(function createBookListItem(book) {
    return <BookListItem key={book.id} book={book} />;
  })
  .value();
```

For this, we use Lodash's chaining syntax by wrapping our collection (in this case, `books`), with lodash functions using `_(books)`. From here, we filter our books to only give us the books we want. Lodash's `.filter` takes in a collection (in this case it comes from our `_(books)`), and a function `filterBookList`. This function is run for each of our books and returns a boolean value. When `.filter` runs this function, it takes all the items that resulted with true, and returns that array to the next part of our chain. Lets look at our filtering function `filterBookList`:

```
function filterBookList(book) {
  if(typeof filter === "boolean") {
    return filter;
  }

  if(typeof filter === "string" && filter.length > 0) {
    // Assume that if a user only types in `n`, they want something that starts with `n`.
    // Cut-off point for filtering from the beginning is 3 characters.
    if(filter.length <= 3) {
      const matchFromBeginning = new RegExp("^" + filter, "gi");
      return Boolean(book.title.match(matchFromBeginning));
    } else {
      const matchAnywhere = new RegExp(filter, "gi");
      return Boolean(book.title.match(matchAnywhere));
    }
  }

  return false;
}
```

This function takes in a book from our list, and returns true if we want to add that to our filtered list, and false if we should not. In this case, we do this by comparing to our `filter` prop. This is the `filter` that is passed into our component by a parent, not to be confused with Lodash's `.filter`. So our first check lets us manually show all or none of the items in our list by passing in a boolean value. If we pass a `true`, then we show everything. If `false`, then we show nothing.  We can probably improve the clarity of this in the future. After this we check whether our `filter` is a string and that the string has characters (We have this filter to decrease load time, so we want to display as little as possible if we can). After this, we have two different checks that can occur. If a user just types in "a", we assume they are looking for something that starts with "a". With regex, a `^` character represents the beginning of a string. The `g` tag tells us to look through the entire string, and the `i` tag tells us to remain case insensitive. These are reflected in our regex expression, `new RegExp("^" + filter, "gi")`. After 3 letters of length, we check anywhere, because someone searching "piece" may very well be trying to find "One Piece". We match against a book's title using regex, and return a boolean. Lastly in our `filterBookList` function, if we don't match anything, we return `false`, so that we default to not showing a book.

The rest of our code is pretty straightforward.  `.sortBy("alias")` is just sorting everything into alphabetical order by using our `alias` string.  `.map` is taking each of those sorted books, and returning a new BookListItem component for each of them. It's taking our book list data and mapping it to new book list components. `.value()`, finally, is just telling Lodash that this is the end of our chain, and that we should be returning our resulting array of components to be stored in our `mappedBooks` variable.
