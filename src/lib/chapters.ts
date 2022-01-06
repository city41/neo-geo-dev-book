import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type Chapter = {
	slug: string;
	meta: Record<string, unknown>;
	content: string;
};

const bookDirectory = join(process.cwd(), 'book');

function isString(v: unknown): boolean {
	const vs = v as string;

	return typeof vs === 'string' && vs.trim().length > 0;
}

function isNumber(v: unknown): boolean {
	const vn = v as number;

	return typeof vn === 'number' && !isNaN(vn);
}

function verifyMeta(meta: unknown): meta is ChapterMeta {
	return !!(
		(meta != null &&
			typeof meta === 'object' &&
			isString((meta as any).chapterNumber)) ||
		(isNumber((meta as any).chapterNumber) &&
			isString((meta as any).title) &&
			isString((meta as any).status) &&
			isString((meta as any).version))
	);
}

function getChapterBySlug(slug: string) {
	const fullPath = join(bookDirectory, slug, 'index.md');
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	if (!verifyMeta(data)) {
		throw new Error(`${slug} is missing meta data`);
	}

	return { slug, meta: data, content };
}

function getAllChapters(): Chapter[] {
	const slugs = fs.readdirSync(bookDirectory);
	const docs = slugs.map((slug) => getChapterBySlug(slug));

	return docs;
}

export { getChapterBySlug, getAllChapters };
export type { Chapter };
