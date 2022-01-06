type TableOfContentsPageProps = {
	chapters: Array<{ slug: string; meta: ChapterMeta }>;
};

function TableOfContentsPage({ chapters }: TableOfContentsPageProps) {
	return (
		<div className="max-w-4xl mx-auto mb-24">
			<h1>Table of Contents</h1>
			<ul>
				{chapters.map((c) => {
					return (
						<li key={c.slug}>
							<a href={`/book/${c.slug}`}>{c.meta.title}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export { TableOfContentsPage };
export type { TableOfContentsPageProps };
