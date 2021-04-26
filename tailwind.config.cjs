const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("./tailwind-typography-styles.cjs");

const { themeVariants, prefersDark, prefersLight } = require("tailwindcss-theme-variants");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,md,svelte,svx,ts}"],
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
				amber: colors.amber,
			},

			fontFamily: {
				sans: ["'Rubik'", ...defaultTheme.fontFamily.sans],
				heading: ["'Rubik'", ...defaultTheme.fontFamily.serif],
			},

			maxWidth: {
				prose: "42rem",
			},

			typography,
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		themeVariants({
			themes: {
				light: {
					mediaQuery: prefersLight,
					semantics: {
						colors: {
							"primary": "white",
							"primary-dark": "gray-100",

							"on-primary": "gray-900",
							"on-primary-weak": "gray-600",
							"on-primary-faint": "gray-400",


							"accent": "amber-600",
							"accent-vivid": "amber-400",
							"accent-strong": "amber-800",
							
							"on-accent": "black",
						},
					},
				},
				dark: {
					mediaQuery: prefersDark,
					semantics: {
						colors: {
							"primary": "gray-900",
							"primary-dark": "black",
							
							"on-primary": "white",
							"on-primary-weak": "gray-400",
							"on-primary-faint": "gray-600",


							"accent": "amber-400",
							"accent-vivid": "amber-600",
							"accent-strong": "amber-200",
							
							"on-accent": "white",
						},
					},
				},
			},
			fallback: "compact",
		}),
	],
};
