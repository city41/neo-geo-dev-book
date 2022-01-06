import {
	GetStaticPathsContext,
	GetStaticPathsResult,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from 'next';
import { ChapterPage } from '../../components/book/ChapterPage';
import type { ChapterPageProps } from '../../components/book/ChapterPage';
import { getAllChapters, getChapterBySlug } from '../../lib/chapters';
import markdownToHtml from '../../lib/markdown';

type NextSlugPageProps = ChapterPageProps;

export async function getStaticProps({
	params,
}: GetStaticPropsContext<{
	slug: string;
}>): Promise<GetStaticPropsResult<NextSlugPageProps>> {
	const chapter = getChapterBySlug(params!.slug as string);
	const allChapters = getAllChapters();

	const content = await markdownToHtml(chapter.content || '');

	return {
		props: {
			...chapter,
			content,
			currentChapterNumber:
				allChapters.findIndex((c) => c.slug === chapter.slug) + 1,
			allSlugs: allChapters.map((c) => c.slug),
			totalChapterCount: getAllChapters().length,
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

export default function NextSlugPage(props: NextSlugPageProps) {
	return <ChapterPage {...props} />;
}
