import clsx from 'clsx';
import { BookNavigation } from './BookNavigation';
import { ChapterStatus } from './ChapterStatus';

type ChapterPageProps = {
	meta: ChapterMeta;
	currentChapterNumber: number;
	totalChapterCount: number;
	allSlugs: string[];
	content: string;
};

function Warning({ className }: { className?: string }) {
	return (
		<div
			className={clsx(className, 'bg-red-200 text-red-900 p-4 -mx-4 w-full')}
		>
			<div className="text-2xl font-bold">Warning!</div>
			This book is in a very early stage. I don&apos;t recommend reading it with
			the intention of learning Neo Geo development just yet. You will likely
			hit pitfalls and mistakes.
		</div>
	);
}

function ChapterPage({
	meta,
	currentChapterNumber,
	totalChapterCount,
	allSlugs,
	content,
}: ChapterPageProps) {
	return (
		<div
			className="mx-auto mb-24 flex flex-col items-center"
			style={{ width: '65ch', maxWidth: '95vw' }}
		>
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
			<Warning className="mb-8" />
			<div
				className="prose lg:prose-xl"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			<BookNavigation
				className="my-16"
				currentChapterNumber={currentChapterNumber}
				totalChapterCount={totalChapterCount}
				allSlugs={allSlugs}
			/>
		</div>
	);
}

export { ChapterPage };
export type { ChapterPageProps };
