import { map } from "lodash";
import { imgHost } from "app/renderer-process/data/services/mangaEdenApi";
import moment from "moment";

const Chapter = function Chapter(initialData = {}) {
  this.id           = initialData.id;
  this.pages        = initialData.pages;
  this.number       = initialData.number;
  this.releaseDate  = initialData.releaseDate;
  this.title        = initialData.title;
  this.isFetching   = initialData.isFetching;
  this.viewed       = initialData.viewed;
};

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

Chapter.prototype.merge = function(nextChapter) {
  var newChapter = new Chapter(this);
  if(!nextChapter) { return newChapter; }

  ["pages", "id", "title", "releaseDate", "lastUpdate", "viewed", "isFetching", "number"].forEach(function(property) {
    if(nextChapter[property] !== undefined) { newChapter[property] = nextChapter[property]; }
  });

  return newChapter;
};

export default Chapter;
