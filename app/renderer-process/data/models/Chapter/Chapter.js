import { map } from "lodash";
import { imgHost } from "renderer/data/services/mangaEdenApi";
import moment from "moment";

class Chapter {
  constructor(initialData = {}) {
    this.id           = initialData.id;
    this.isFetching   = initialData.isFetching;
    this.lastUpdated  = initialData.lastUpdated;
    this.number       = initialData.number;
    this.pages        = initialData.pages;
    this.releaseDate  = initialData.releaseDate;
    this.title        = initialData.title;
    this.viewed       = initialData.viewed;
  }

  merge(chapterToMerge) {
    var nextChapter = new Chapter(this);
    if(!chapterToMerge) { return nextChapter; }

    Object.keys(this).forEach(function(property) {
      if(chapterToMerge[property] !== undefined && chapterToMerge[property] !== null) {
        nextChapter[property] = chapterToMerge[property];
      }
    });

    return nextChapter;
  }
}

Chapter.createFromMangaEdenChapterApi = function(response, chapterID) {
  var formatPage = function formatPage([pageNumber, imageUrl, width, height]) {
    return {
      id: pageNumber,
      image: imgHost + imageUrl,
      width: width,
      height: height
    };
  };

  return new Chapter({
    id: chapterID,
    pages: map(response.images, formatPage)
  });
};

Chapter.createFromMangaEdenMangaApi = function([number, date, title, id]) {
  return new Chapter({
    id: id,
    number: parseFloat(number),
    releaseDate: parseInt(date),
    title: title
  });
};

export default Chapter;
