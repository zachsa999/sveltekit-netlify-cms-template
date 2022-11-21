import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
	preprocess: [
		preprocess({
			postcss: true,
		}),

		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			smartypants: {
				dashes: 'oldschool'
			},
			remarkPlugins: [],
			rehypePlugins: []
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
		}
	},
};

export default config;