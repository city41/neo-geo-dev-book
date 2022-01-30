type ChapterStatus =
	| 'planned'
	| 'stub'
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
