import clsx from 'clsx';
import { StatusBadge } from './StatusBadge';

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
				<StatusBadge status={status} />
			</div>
			<div>
				version: <span className="font-bold">{version}</span>
			</div>
		</div>
	);
}

export { ChapterStatus };
