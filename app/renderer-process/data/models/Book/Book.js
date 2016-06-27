import moment from "moment";
import { map, without } from "lodash";

import Chapter from "renderer/data/models/Chapter";
import { imgHost } from "renderer/data/services/mangaEdenApi";
import decodeEntities from "renderer/utilities/decodeEntities";

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

    if(Array.isArray(this.chapters)) {
      this.chapters = this.chapters.map(chapter => new Chapter(chapter));
    }
  }

  merge(bookToMerge) {
    var nextBook = new Book(this);
    if(!bookToMerge) { return nextBook; }

    const bookPropertiesToMerge = without(Object.keys(this), "chapters");
    bookPropertiesToMerge.forEach(function(propertyName) {
      var nextProperty = bookToMerge[propertyName];
      if(nextProperty !== undefined && nextProperty !== null) {
        nextBook[propertyName] = nextProperty;
      }
    });

    // Diff lengths, add new chapters, and update old ones
    if(bookToMerge.chapters && bookToMerge.chapters.length) {
      const currentChapters = this.chapters || [];
      const chapterLengthDifference = bookToMerge.chapters.length - currentChapters.length;
      const newChapters = bookToMerge.chapters.slice(0, chapterLengthDifference);
      const oldChapters = currentChapters.map(function(currChapter, index) {
        return currChapter.merge(bookToMerge.chapters[index + chapterLengthDifference]);
      });

      nextBook.chapters = newChapters.concat(oldChapters);
    }
    return nextBook;
  }
}

Book.createFromMangaEdenMangaApi = function(response, bookID) {
  const chapters = map(response.chapters, function mapChapterData(chapterData) {
    return Chapter.createFromMangaEdenMangaApi(chapterData);
  });

  return new Book({
    alias: response.alias,
    artist: decodeEntities(response.artist),
    author: decodeEntities(response.author),
    categories: response.categories,
    chapters: chapters,
    created: parseInt(response.created),
    description: decodeEntities(response.description),
    hits: response.hits,
    id: bookID,
    image: imgHost + response.image,
    lastChapterDate: parseInt(response.last_chapter_date),
    status: parseInt(response.status),
    title: decodeEntities(response.title)
  });
};

Book.createFromMangaEdenListApi = function(response) {
  return new Book({
    alias: response.a,
    categories: response.c,
    hits: response.h,
    image: imgHost + response.im,
    id: response.i,
    lastChapterDate: parseInt(response.ld),
    status: parseInt(response.s),
    title: decodeEntities(response.t)
  });
};

export default Book;
