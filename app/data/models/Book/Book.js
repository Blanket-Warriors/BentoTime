import moment from "moment";
import { assign, map } from "lodash";
import Chapter from "app/data/models/Chapter";
import { imgHost } from "app/data/services/mangaEdenApi";
import decodeEntities from "app/utilities/decodeEntities";

const Book = function Book() {};

Book.createFromMangaEdenMangaApi = function(response, bookID) {
  const chapters = map(response.chapters, function mapChapterData(chapterData) {
    return Chapter.createFromMangaEdenMangaApi(chapterData);
  });

  return assign(new Book(), {
    id: bookID,
    title: decodeEntities(response.title),
    image: imgHost + response.image,
    artist: decodeEntities(response.artist),
    author: decodeEntities(response.author),
    created: moment.unix(parseInt(response.created)),
    lastChapterDate: moment.unix(parseInt(response.last_chapter_date)),
    lastUpdated: undefined,
    status: response.status,
    chapters: chapters,
    description: decodeEntities(response.description),
    hits: response.hits,
    categories: response.categories,
    alias: response.alias
  });
};

Book.createFromMangaEdenListApi = function(response) {
  return assign(new Book(), {
    id: response.i,
    title: decodeEntities(response.t),
    image: imgHost + response.im,
    lastChapterDate: moment.unix(parseInt(response.ld)),
    lastUpdated: undefined,
    alias: response.a,
    status: response.s,
    categories: response.c,
    hits: response.h
  });
};

export default Book;
