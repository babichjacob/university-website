import { imagetools } from "vite-imagetools";
import { mdsvex } from "mdsvex";

import mdsvexConfig from "./mdsvex.config.cjs";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { visualizer } from "rollup-plugin-visualizer";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		adapter: adapter(),

		hydrate: dev,

		router: dev,
		
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [
				imagetools({
					force: true,
				}),
			],
		},
	},
};

export default config;
