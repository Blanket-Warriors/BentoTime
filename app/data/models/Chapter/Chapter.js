import { assign, map } from "lodash";
import { imgHost } from "app/data/services/mangaEdenApi";

const Chapter = function Chapter() {};

Chapter.createFromMangaEdenChapterApi = function(response, chapterID) {
  return assign(new Chapter(), {
    id: chapterID,
    lastUpdated: undefined,
    pages: map(response.images, this.formatPage)
  });
};

Chapter.createFromMangaEdenMangaApi = function([number, date, title, id]) {
  return { id, number, date, title };
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
