<script>
	import { authors } from "../_site.config.js";

	export let author;
	export let created;
	export let title;
	export let subtitle;
</script>

<div class="w-full max-w-prose items-center pt-12">
	<img class="h-16 w-16 mr-8 rounded-full inline-block float-left" src={authors[author].photo} alt="A photo of {authors[author].name}" title={authors[author].name} />

	<div class="text-on-primary-weak"><span class="text-on-primary">{authors[author].name}</span> on <span class="text-on-primary">{new Date(created).toLocaleString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span> wrote</div>

	<div class="mt-4 text-4xl font-heading font-bold leading-none">{title}</div>
	<div class="mt-8 text-2xl font-heading">{subtitle}</div>
</div>

<hr class="border-t-4 mt-4 mb-8 border-on-primary-faint border-solid block w-full max-w-prose" />

<article class="prose w-full max-w-prose py-12">
	<slot />
</article>
