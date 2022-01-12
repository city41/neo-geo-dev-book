import clsx from 'clsx';

type StatusBadgeProps = {
	className?: string;
	status: ChapterStatus;
};

function StatusBadge({ className, status }: StatusBadgeProps) {
	return (
		<div
			className={clsx(className, 'px-2 py-1 text-white font-bold', {
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
	);
}

export { StatusBadge };
