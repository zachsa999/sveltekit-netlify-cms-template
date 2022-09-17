import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify'
import sveltePreprocess from 'svelte-preprocess';
import makeAttractionsImporter from 'attractions/importer.js';
import path from 'path'

const __dirname = ''

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
	preprocess: [
		sveltePreprocess({
			scss: {
				importer: makeAttractionsImporter({
					themeFile: path.join(__dirname, 'static/css/theme.scss'),
					nodeModulesPath: path.join(__dirname, 'node_modules'),
				}),
				includePaths: [path.join(__dirname, './static/css')],
			}
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
		adapter: adapter({
		}),

		prerender: {
		}
	},

};

export default config;
