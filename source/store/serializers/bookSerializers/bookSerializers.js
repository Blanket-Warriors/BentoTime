export function deserializeBook(data) {
	if (!data.chapters) {
		return {
			alias: data.a,
			categories: data.c,
			hits: data.h,
			image: data.im && (imgHost + data.im),
			id: data.id,
			lastChapterDate: parseInt(data.ld),
			status: parseInt(data.s),
			title: decodeEntities(data.t),
		};
	}

	return {
		alias: data.alias,
		artist: decodeEntities(data.artist),
		author: decodeEntities(data.author),
		categories: data.categories,
		chapters: map(data.chapters, chapter => deserializeChapter(chapter)),
		created: parseInt(data.created),
		description: decodeEntities(data.description),
		hits: data.hits,
		id: data.id,
		image: data.image && (imgHost + data.image),
		lastChapterDate: parseInt(data.last_chapter_date),
		status: parseInt(data.status),
		title: decodeEntities(data.title)
	};
}

merge(bookToMerge) {
	var nextBook = new Book(this);
	if(!bookToMerge) { return nextBook; }

	const bookPropertiesToMerge = without(Object.keys(this), "chapters");
	bookPropertiesToMerge.forEach(function(propertyName) {
		var nextProperty = bookToMerge[propertyName];
		if(nextProperty !== undefined && nextProperty !== null) {
			nextBook[propertyName] = nextProperty;
		}
	});

	// Diff lengths, add new chapters, and update old ones
	if(bookToMerge.chapters && bookToMerge.chapters.length) {
		const currentChapters = this.chapters || [];
		const chapterLengthDifference = bookToMerge.chapters.length - currentChapters.length;
		const newChapters = bookToMerge.chapters.slice(0, chapterLengthDifference);
		const oldChapters = currentChapters.map(function(currChapter, index) {
			return currChapter.merge(bookToMerge.chapters[index + chapterLengthDifference]);
		});

		nextBook.chapters = newChapters.concat(oldChapters);
	}
	return nextBook;
}
