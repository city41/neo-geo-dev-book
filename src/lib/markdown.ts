import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import gfm from 'remark-gfm';

export default async function markdownToHtml(
	markdown: string
): Promise<string> {
	// @ts-ignore prism seems to not quite meet use()'s expected param type
	const result = await remark().use(html).use(prism).use(gfm).process(markdown);

	return result.toString();
}
