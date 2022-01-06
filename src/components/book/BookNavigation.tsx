import clsx from 'clsx';

type BookNavigationProps = {
	className?: string;
	currentChapterNumber: number;
	totalChapterCount: number;
	allSlugs: string[];
};

function A({ className, ...rest }: JSX.IntrinsicElements['a']) {
	return <a className={clsx(className, 'text-blue-600 underline')} {...rest} />;
}

function BookNavigation({
	className,
	currentChapterNumber,
	totalChapterCount,
	allSlugs,
}: BookNavigationProps) {
	const prevSlug = allSlugs[currentChapterNumber - 2];
	const prev =
		currentChapterNumber > 1 ? (
			<A style={{ gridColumn: '1' }} href={`/book/${prevSlug}`}>
				Chapter {currentChapterNumber - 1}
			</A>
		) : null;

	const nextSlug = allSlugs[currentChapterNumber];
	const next =
		currentChapterNumber < totalChapterCount - 1 ? (
			<A style={{ gridColumn: '3' }} href={`/book/${nextSlug}`}>
				Chapter {currentChapterNumber + 1}
			</A>
		) : null;

	return (
		<div
			className={clsx(
				className,
				'w-full grid grid-cols-3 justify-items-center text-xs'
			)}
		>
			{prev}
			<A style={{ gridColumn: '2' }} href="/book">
				table of contents
			</A>
			{next}
		</div>
	);
}

export { BookNavigation };
