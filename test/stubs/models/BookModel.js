class Book {
  constructor(initialData = {}) {
    this.alias            = initialData.alias;
    this.artist           = initialData.artist;
    this.author           = initialData.author;
    this.bookmarked       = initialData.bookmarked;
    this.categories       = initialData.categories;
    this.chapters         = initialData.chapters;
    this.created          = initialData.created;
    this.description      = initialData.description;
    this.hits             = initialData.hits;
    this.id               = initialData.id;
    this.image            = initialData.image;
    this.isFetching       = initialData.isFetching;
    this.lastChapterDate  = initialData.lastChapterDate;
    this.lastUpdated      = initialData.lastUpdated;
    this.status           = initialData.status;
    this.title            = initialData.title;
  }

  merge() {
    return new Book(this);
  }
}

Book.createFromMangaEdenListApi = function(){
  return new Book();
};

Book.createFromMangaEdenMangaApi = function(){
  return new Book();
};

export default Book;
