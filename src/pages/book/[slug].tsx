import {
	GetStaticPathsContext,
	GetStaticPathsResult,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from 'next';
import { ChapterPage } from '../../components/book/ChapterPage';
import { getAllChapters, getChapterBySlug } from '../../lib/chapters';
import markdownToHtml from '../../lib/markdown';

type NextSlugPageProps = {
	meta: ChapterMeta;
	content: string;
};

export async function getStaticProps({
	params,
}: GetStaticPropsContext<{
	slug: string;
}>): Promise<GetStaticPropsResult<NextSlugPageProps>> {
	const doc = getChapterBySlug(params!.slug as string);
	const content = await markdownToHtml(doc.content || '');

	return {
		props: {
			...doc,
			content,
		},
	};
}

export async function getStaticPaths(
	_context: GetStaticPathsContext
): Promise<GetStaticPathsResult> {
	const chapters = getAllChapters();

	return {
		paths: chapters.map((chapter) => {
			return {
				params: {
					slug: chapter.slug,
				},
			};
		}),
		fallback: false,
	};
}

export default function NextSlugPage({ meta, content }: NextSlugPageProps) {
	return <ChapterPage meta={meta} content={content} />;
}
