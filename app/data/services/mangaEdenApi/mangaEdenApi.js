import { Observable } from "rx";
import request from "superagent";

import Library from "app/data/models/Library";
import Book from "app/data/models/Book";
import Chapter from "app/data/models/Chapter";

export const baseHost = "http://www.mangaeden.com/";
export const imgHost = "http://cdn.mangaeden.com/mangasimg/";

function getData(url, callback) {
  request
    .get(url)
    .end((error, { body = {} }) => {
      return callback(error, body);
    });
}

const getData$ = Observable.fromNodeCallback(getData);

export function getLibrary$(pageId) {
  if(pageId !== undefined) {
    return getData$(`${baseHost}api/list/0/?p=${pageId}`)
      .map(response => Library.createFromMangaEdenListApi(response));
  }
  return getData$(`${baseHost}api/list/0/`)
    .map(response => Library.createFromMangaEdenListApi(response));
}

export function getBook$(bookId) {
  return getData$(`${baseHost}api/manga/${bookId}/`)
    .map(response => Book.createFromMangaEdenMangaApi(response, bookId));
}

export function getChapter$(chapterId) {
  return getData$(`${baseHost}api/chapter/${chapterId}/`)
    .map(response => Chapter.createFromMangaEdenChapterApi(response, chapterId));
}
