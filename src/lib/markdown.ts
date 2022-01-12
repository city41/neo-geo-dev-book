import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import gfm from 'remark-gfm';

export default async function markdownToHtml(
	markdown: string
): Promise<string> {
	const result = await remark()
		.use(gfm)
		.use(html, { sanitize: false })
		.use(prism as any)
		.process(markdown);

	return (
		result
			.toString()
			// fudge all img src's to be the root, so they can be found in public
			// TODO: there has to be a better way ... also see scripts/copyImagesToPublic.sh
			.replace(/src="\./g, 'src="')
	);
}
