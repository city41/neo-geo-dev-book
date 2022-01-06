import { ChapterStatus } from './ChapterStatus';

type ChapterProps = {
	meta: ChapterMeta;
	content: string;
};

function ChapterPage({ meta, content }: ChapterProps) {
	return (
		<div className="mx-auto my-24 flex flex-col items-center">
			<h1 className="font-bold text-4xl mb-8">
				Chapter {meta.chapterNumber}: {meta.title}
			</h1>
			<ChapterStatus status={meta.status} version={meta.version} />
			<div
				className="prose lg:prose-xl"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
}

export { ChapterPage };
