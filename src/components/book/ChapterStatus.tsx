import clsx from 'clsx';

type ChapterStatus = {
	className?: string;
	status: ChapterMeta['status'];
	version: string;
};

function ChapterStatus({ className, status, version }: ChapterStatus) {
	return (
		<div className={clsx(className)}>
			{status} - {version}
		</div>
	);
}

export { ChapterStatus };
