import { readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, date, image }
  } = matter(text);
  const body = marked(content, { headerIds: false, mangle: false });
  // { headerIds: false, mangle: false } added due to warnings in the terminal.
  return { title, date, image, body };
}
