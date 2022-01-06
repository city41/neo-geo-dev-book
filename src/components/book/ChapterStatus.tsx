import clsx from 'clsx';

type ChapterStatusProps = {
	className?: string;
	status: ChapterStatus;
	version: string;
};

function ChapterStatus({ className, status, version }: ChapterStatusProps) {
	return (
		<div
			className={clsx(
				className,
				'flex flex-row gap-x-2 items-center text-sm text-gray-600'
			)}
		>
			<div className="flex flex-row gap-x-2 items-center">
				<div>status:</div>
				<div
					className={clsx('px-2 py-1 text-white font-bold', {
						'bg-red-500': status === 'brainstorming',
						'bg-yellow-900': status === 'stub',
						'bg-yellow-700': status === 'rough-draft',
						'bg-green-600': status === 'alpha',
						'bg-blue-600': status === 'beta',
						'bg-indigo-700': status === 'complete',
					})}
				>
					{status.replace(/-/g, ' ')}
				</div>
			</div>
			<div>
				version: <span className="font-bold">{version}</span>
			</div>
		</div>
	);
}

export { ChapterStatus };
