import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(
	markdown: string
): Promise<string> {
	// @ts-ignore prism seems to not quite meet use()'s expected param type
	const result = await remark().use(html).use(prism).process(markdown);
	return result.toString();
}
