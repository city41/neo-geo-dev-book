import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { TableOfContentsPage } from '../../components/book/TableOfContentsPage';
import type { TableOfContentsPageProps } from '../../components/book/TableOfContentsPage';
import { getAllChapters } from '../../lib/chapters';

type NextBookIndexPageProps = TableOfContentsPageProps;

export async function getStaticProps({}: GetStaticPropsContext): Promise<
	GetStaticPropsResult<NextBookIndexPageProps>
> {
	const allChapters = getAllChapters();

	return {
		props: {
			chapters: allChapters.map((c) => ({ slug: c.slug, meta: c.meta })),
		},
	};
}

export default function NextBookIndexPage(props: NextBookIndexPageProps) {
	return <TableOfContentsPage {...props} />;
}
