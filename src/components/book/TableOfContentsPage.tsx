type TableOfContentsPageProps = {
	chapters: Array<{ slug: string; meta: ChapterMeta }>;
};

function TableOfContentsPage({ chapters }: TableOfContentsPageProps) {
	return (
		<div className="max-w-4xl mx-auto my-24">
			<h1 className="text-4xl font-bold mb-8">Table of Contents</h1>
			<ul>
				{chapters.map((c) => {
					return (
						<li key={c.slug}>
							<a className="hover:underline" href={`/book/${c.slug}`}>
								{c.meta.chapterNumber}: {c.meta.title}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export { TableOfContentsPage };
export type { TableOfContentsPageProps };
