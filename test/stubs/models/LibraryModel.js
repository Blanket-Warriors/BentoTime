class Library {
  constructor(initialData = {}) {
    this.isFetching   = initialData.isFetching;
    this.lastUpdated = initialData.lastUpdated;
    this.totalBooks = initialData.totalBooks;
    this.books = initialData.books || {};
  }

  merge() {
    return new Library();
  }
}


Library.createFromMangaEdenListApi = function(){
  return new Library();
};

export default Library;
