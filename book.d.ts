type ChapterStatus =
	| 'stub'
	| 'brainstorming'
	| 'rough-draft'
	| 'alpha'
	| 'beta'
	| 'complete';

type ChapterMeta = {
	chapterNumber: number | string;
	title: string;
	status: ChapterStatus;
	version: string;
	description?: string;
};
