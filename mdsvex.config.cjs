module.exports = {
	extensions: [".svelte.md"],
	smartypants: {
		dashes: "oldschool",
	},
	remarkPlugins: [
		require("remark-abbr"),
	],
	rehypePlugins: [
		require("rehype-slug"),
		[require("rehype-autolink-headings"), {
			behavior: "wrap",
		}],
	],
	layout: {
		_: "./src/lib/Prose.svelte",
		blog: "./src/routes/blog/_layout.svelte",
	},
};
