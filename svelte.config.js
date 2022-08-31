import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
	preprocess: [

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
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// pages: 'build',
			// assets: 'build',
			// fallback: null,
			// precompress: false
		}),

		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
		}
	},

};

export default config;
