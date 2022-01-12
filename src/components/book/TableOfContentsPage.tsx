import { StatusBadge } from './StatusBadge';

type TableOfContentsPageProps = {
	chapters: Array<{ slug: string; meta: ChapterMeta }>;
};

function TableOfContentsPage({ chapters }: TableOfContentsPageProps) {
	return (
		<div className="max-w-4xl mx-auto my-24">
			<h1 className="text-4xl font-bold mb-8">Table of Contents</h1>
			<ul className="flex flex-col gap-y-2">
				{chapters.map((c) => {
					return (
						<li className="grid grid-cols-4 max-w-xl" key={c.slug}>
							<a
								className="hover:underline col-span-3"
								href={`/book/${c.slug}`}
							>
								{c.meta.chapterNumber}: {c.meta.title}
							</a>
							<StatusBadge
								className="text-sm text-center"
								status={c.meta.status}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export { TableOfContentsPage };
export type { TableOfContentsPageProps };
