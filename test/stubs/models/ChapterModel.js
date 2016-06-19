class Chapter {
  constructor(initialData = {}) {
    this.id           = initialData.id;
    this.pages        = initialData.pages;
    this.number       = initialData.number;
    this.releaseDate  = initialData.releaseDate;
    this.title        = initialData.title;
    this.isFetching   = initialData.isFetching;
    this.viewed       = initialData.viewed;
  }

  merge() {
    return new Chapter();
  }
}


Chapter.createFromMangaEdenChapterApi = function(){
  return new Chapter();
};

Chapter.createFromMangaEdenMangaApi = function(){
  return new Chapter();
};

Chapter.formatPage = function(){};

export default Chapter;
