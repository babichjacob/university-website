module.exports = (_theme) => ({
	DEFAULT: {
		css: {
			color: false,
			fontWeight: 300,
			maxWidth: false,
			"@apply text-on-primary": "",

			a: {
				color: false,
				fontWeight: 400,
				"@apply text-accent": "",
			},
			"a:hover, a:focus": {
				textDecoration: "underline",
				"@apply text-accent-strong": "",
			},

			strong: {
				color: false,
				fontWeight: 400,
			},

			h1: {
				color: false,
			},
			h2: {
				color: false,
			},
			h3: {
				color: false,
			},
			h4: {
				color: false,
			},

			"h1, h2, h3, h4": {
				"@apply font-heading": "",
			},

			"h1 a, h2 a, h3 a, h4 a": {
				fontWeight: 500,
				textDecoration: "none",
				"@apply text-on-primary": "",
			},
		},
	},
});
