import type { RequestHandler } from "@sveltejs/kit";

import colors from "tailwindcss/colors.js";

import { author, description, lang, name, shortName } from './_site.config.js';

import icon192 from './_favicon.png?width=192&height=192&format=png';
import icon512 from './_favicon.png?width=512&height=512&format=png';

export const get: RequestHandler = async () => {
	return {
		body: {
			short_name: shortName,
			name,
			description,
			lang,
			icons: [
				{
					src: icon192,
					type: 'image/png',
					sizes: '192x192',
					purpose: 'any maskable'
				},
				{
					src: icon512,
					type: 'image/png',
					sizes: '512x512',
					purpose: 'any maskable'
				}
			],
			start_url: '/',
			display: 'minimal-ui',
			background_color: '#FFFFFF',
			theme_color: colors.amber[500],
			shortcuts: [
				{
					name: 'Read my Blog',
					short_name: 'Blog',
					description: `Read all the posts on ${shortName}`,
					url: '/blog',
					icons: [] // TODO,
				},
				{
					name: 'See my projects',
					short_name: 'Projects',
					description: `Take a look at all the projects ${author} has to show`,
					url: '/blog',
					icons: [] // TODO,
				},
			],
		},
	};
};
