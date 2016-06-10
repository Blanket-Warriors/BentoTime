import { map } from "lodash";
import { imgHost } from "renderer/data/services/mangaEdenApi";
import moment from "moment";

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

  merge(nextChapter) {
    var newChapter = new Chapter(this);
    if(!nextChapter) { return newChapter; }

    Object.keys(this).forEach(function(property) {
      if(nextChapter[property] !== undefined) {
        newChapter[property] = nextChapter[property];
      }
    });

    return newChapter;
  }
}

Chapter.createFromMangaEdenChapterApi = function(response, chapterID) {
  return new Chapter({
    id: chapterID,
    pages: map(response.images, this.formatPage)
  });
};

Chapter.createFromMangaEdenMangaApi = function([number, date, title, id]) {
  return new Chapter({
    id: id,
    number: number,
    releaseDate: moment.unix(parseInt(date)),
    title: title
  });
};

Chapter.formatPage = function([pageNumber, imageUrl, width, height]) {
  return {
    id: pageNumber,
    image: imgHost + imageUrl,
    width: width,
    height: height
  };
};

export default Chapter;
