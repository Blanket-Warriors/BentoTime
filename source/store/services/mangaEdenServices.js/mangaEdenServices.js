import "isomorphic-fetch";
import { MANGA_EDEN_BASE_URL } from "source/config.js";
import * as serializers from "store/serializers/serializers.js";


export function getLibrary(pageId) {
	var libraryUrl = `${MANGA_EDEN_BASE_URL}/api/list/0/`;
	if (pageId == null) { libraryUrl += `?p=${pageId}/`; }

	return get(chapterUrl)
		.then(({ data }) => serializers.deserializeLibrary(data));
}

export function getChapter(chapterId) {
	const chapterUrl = `${MANGA_EDEN_BASE_URL}/api/chapter${chapterId}`;

	return get(chapterUrl)
		.then(({ data }) => serializers.deserializeChapter(data));
}

export function getBook(bookId) {
	const bookUrl = `${MANGA_EDEN_BASE_URL}/api/manga/${bookId}`;

	return get(bookUrl)
		.then(({ data }) => serializers.deserializeBook(data));
}
