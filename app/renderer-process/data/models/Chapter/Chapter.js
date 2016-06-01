import { assign, map } from "lodash";
import { imgHost } from "app/renderer-process/data/services/mangaEdenApi";
import moment from "moment";

const Chapter = function Chapter() {};

Chapter.createFromMangaEdenChapterApi = function(response, chapterID) {
  return assign(new Chapter(), {
    id: chapterID,
    lastUpdated: undefined,
    pages: map(response.images, this.formatPage)
  });
};

Chapter.createFromMangaEdenMangaApi = function([number, date, title, id]) {
  return assign(new Chapter(), {
    id,
    number,
    date: moment.unix(parseInt(date)),
    title
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
