/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "*?width=32&height=32&format=ico" {
	const src: string;
	export default src;
}
declare module "*?width=128&height=128&format=png" {
	const src: string;
	export default src;
}

declare module "*?width=180&height=180&format=png" {
	const src: string;
	export default src;
}
