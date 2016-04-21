import request from "superagent";

import Library from "app/data/models/Library";
import Book from "app/data/models/Book";
import Chapter from "app/data/models/Chapter";

export const baseHost = "http://www.mangaeden.com/";
export const imgHost = "http://cdn.mangaeden.com/mangasimg/";

function getData(url) {
  return new Promise(function(resolve, reject) {
    request
      .get(url)
      .end(function(error, response) {
        if(error) { return reject(error); }
        resolve(response.body);
      });
  });
}

export function getLibrary$(pageId) {
  if(pageId !== undefined) {
    return getData(`${baseHost}api/list/0/?p=${pageId}`)
      .then(response => {
        return Promise.resolve(Library.createFromMangaEdenListApi(response));
      });
  }
  return getData(`${baseHost}api/list/0/`)
    .then(response => {
      return Promise.resolve(Library.createFromMangaEdenListApi(response));
    });
}

export function getBook$(bookId) {
  return getData(`${baseHost}api/manga/${bookId}/`)
    .then(response => {
      return Promise.resolve(Book.createFromMangaEdenMangaApi(response, bookId));
    });
}

export function getChapter$(chapterId) {
  return getData(`${baseHost}api/chapter/${chapterId}/`)
    .then(response => {
      return Promise.resolve(Chapter.createFromMangaEdenChapterApi(response, chapterId));
    });
}
