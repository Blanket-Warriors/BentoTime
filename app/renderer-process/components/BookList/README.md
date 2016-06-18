BookList
========
BookList takes in an object or array of books, and returns a list component that displays the information for those books in the form of [BookListItems](../BookListItem).

How to use
----------
#### With Filter
BookList is very stingy on displaying books, and will only display books matched by the filter. This helps us speed up our application by reducing the amount of components rendered. We filter our `BookList` by passing in a `filter` prop. The `filter` prop is a string that we use to match against the manga titles, ignoring case:

```js
import BookList from "app/components/BookList";
const myBooks = [/*An array of books*/];
const filterString = "naruto";

<BookList books={myBooks} filter={filterString} />
```

#### Without Filter
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

#### ClassNames
 * `.book-list`: Our main component class
 * `.book-list--empty`: The class that is used when the book-list has no books

How it works
--------------
We start by creating constants that we only need to create once. This way these constants only have to be declared once. `today` is just a [moment object representing the current datetime](http://momentjs.com/docs/#/parsing/now/). `matchFromBeginning` and `matchAnywhere` are regex expressions used to filter any books we want to filter by string. These are explained when we [talk about our book filters](./#filterBooks).

#### mappedBooks
The heart of this code comes from where we create our list of `mappedBooks`.

##### `_(books)`
[Lodash's chaining syntax](https://lodash.com/docs#_) wraps our collection (in this case, `books`), with lodash functions using the `_(...)` syntax. From here, we can chain lodash functions to our collection.

##### `.filter`
Lodash's [filter](https://lodash.com/docs#filter) takes in the collection from `_(books)`, and a function `filterBooks`. This callback function is then run for each of our books and returns a boolean value. When `.filter` runs this function, it takes all the items that resulted with true, and returns that array to the next part of our chain. Don't worry about the logic in our `filterBooks` function. We'll come back to that.

##### `.sortBy`
Lodash's [sortBy](https://lodash.com/docs#sort-by) just orders the books by relying on the function we pass it. In this case, we want to sort by the lastChapterDate of our books. Since our date is already in the form of a [unix time stamp](https://en.wikipedia.org/wiki/Unix_time), it's a number, and perfect for sorting.

##### `.map`
The last part of our chain, Lodash's [map](https://lodash.com/docs#map) just takes each piece of sorted and filtered book data, and returns a [BookListItem](../BookListItem) component based off that data. We also determine whether we should show a `hasNewChapter` flag. If a user has bookmarked a book, but has not read the latest chapter, then we let them know.

##### `.value`
We need this at the end of our chain to tell Lodash that our chain is complete. We can then safely return an array. Without this, we will be returning a Lodash object thaPt React can't interpret.

#### filterBooks
This function takes in a book from our list, and returns true if we want to add that to our filtered list, and false if we should not. There is a bit of logic here, so let's go through step-by-step:

1. `!book.id` - Check whether we have a legit book

If there's no book id, then something is wrong, and we should not try to display this book.

2. `onlyShowBookmarks` - Is this book bookmarked?

If a onlyShowBookmarks is passed in as a prop, and a book is not bookmarked, we don't want to show it.

3. `dateFilter` - Filter by date

We expect a dateFilter prop to be a string. Something like "day", "week", or "month". This is used by Moment.js to filter, and we can filter so a user just sees recent manga titles.

4. `typeof searchFilter === "boolean"` - Filter by boolean

Checking for a boolean with `typeof filter === "boolean"` lets us manually show all or none of the items in our list by passing in a boolean value. If we pass a `true`, then we show everything. If `false`, then we show nothing.


5. `typeof searchFilter === "string"` - Filter by string

We have two different string that depends on the length of the string. If a user just types in "a", we assume they are looking for something that starts with "a". With regex, a `^` character represents the beginning of a string. The `g` tag tells us to look through the entire string, and the `i` tag tells us to remain case insensitive. These are reflected in our regex expression, `new RegExp("^" + filter, "gi")`. After 3 letters of length, we check anywhere, because someone searching "piece" may very well be trying to find "One Piece". We match against a book's title using regex, and return a boolean.
