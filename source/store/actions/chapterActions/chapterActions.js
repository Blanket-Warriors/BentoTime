import * as services from "store/services/services.js";
import * as types from "../actionTypes.js";

export function fetchChapter(chapterId) {
	return {
		types: [
			types.FETCH_CHAPTER_REQUEST,
			types.FETCH_CHAPTER_SUCCESS,
			types.FETCH_CHAPTER_FAILURE
		],
		callApi() { return services.fetchChapter(chapterId); },
		payload: { chapterId }
	}
}

export function updateChapter(chapterId, chapter) {
	return {
		type: types.UPDATE_CHAPTER,
		payload: { chapterId, chapter }
	};
}
