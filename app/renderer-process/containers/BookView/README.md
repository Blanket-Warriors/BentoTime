Book View
---------
The Book View displays a single Manga book. It receives the data of a single book from store, and will fire a fetchBook action to receive updated book information on each load. A book view is made up of two parts:

## Book Hero
The [Book Hero](../../components/BookHero) component is our title page, meant to show off the book. The bookmark button is here as well.
![Bentotime](../../../../public/assets/screenshots/book-hero.png)

## Book Info
The [Book Info](../../components/BookInfo) component houses information about the Book. As of v1.0, this only holds a chapter list, but we're looking into expanding this page's functionality in the future.
![Bentotime](../../../../public/assets/screenshots/chapter-list.png)
