type ChapterMeta = {
	chapterNumber: number | string;
	title: string;
	status:
		| 'stub'
		| 'brainstorming'
		| 'rough-draft'
		| 'alpha'
		| 'beta'
		| 'complete';
	version: string;
	description?: string;
};
