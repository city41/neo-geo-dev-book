import { BookNavigation } from './BookNavigation';
import { ChapterStatus } from './ChapterStatus';

type ChapterPageProps = {
	meta: ChapterMeta;
	currentChapterNumber: number;
	totalChapterCount: number;
	allSlugs: string[];
	content: string;
};

function ChapterPage({
	meta,
	currentChapterNumber,
	totalChapterCount,
	allSlugs,
	content,
}: ChapterPageProps) {
	return (
		<div className="max-w-4xl mx-auto mb-24 flex flex-col items-center">
			<BookNavigation
				className="mt-8 mb-24"
				currentChapterNumber={currentChapterNumber}
				totalChapterCount={totalChapterCount}
				allSlugs={allSlugs}
			/>
			<h1 className="font-bold text-4xl mb-2">
				Chapter {meta.chapterNumber}: {meta.title}
			</h1>
			<ChapterStatus
				className="mb-16"
				status={meta.status}
				version={meta.version}
			/>
			<div
				className="prose lg:prose-xl"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}

export { ChapterPage };
export type { ChapterPageProps };
