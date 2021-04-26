<script>
	import { author, shortName as siteTitle } from "./_site.config.js";
	import { page } from "$app/stores";

	import "../app.postcss";
	
	// TODO: doesn't actually use ico format
	import faviconIco from "./_favicon.png?width=32&height=32&format=ico";
	import favicon from "./_favicon.png?width=128&height=128&format=png";
	import appleTouchIcon from "./_favicon.png?width=180&height=180&format=png";


	const links = [
		{
			name: "Blog",
			route: "/blog",
		},
		{
			name: "Projects",
			route: "/projects",
		},
		{
			name: "University",
			route: "https://umdearborn.edu/",
		},
	];

	// TODO: based on the page
	import image from "./_me.png";
	const imageAlt = "A photo of me";
	
	const pageTitle = "What is this?";
	$: title = `${pageTitle} - ${siteTitle}`;
	const description = "My first blog post, explaining this very cool template";
	const domain = "localhost:3000";
	const route = "/blog/what-is-this";
	$: url = `${domain}${route}`;

	$: metaTagsProperty = {
		"author": author,
		"og:url": url,
		"og:type": "website",
		"og:title": title,
		"og:image": image,
		"og:image:alt": imageAlt,
		...(description ? {
			"og:description": description,
		} : {}),
		"og:site_name": siteTitle,
		"og:locale": "en_US",
	};
	$: metaTagsName = {
		"twitter:card": "summary_large_image",
		"twitter:url": url,
		"twitter:title": title,
		...(description ? {
			"twitter:description": description,
		} : {}),
		"twitter:image": image,
		"twitter:image:alt": imageAlt,
	}
</script>

<svelte:head>
	<link rel="icon" href={faviconIco} />
	<link rel="shortcut icon" type="image/png" href={favicon} />
	<link rel="apple-touch-icon" href={appleTouchIcon} />
	<link rel="manifest" href="/manifest.json" />

	<title>{title}</title>

	{#each Object.entries(metaTagsProperty) as [property, content]}
		<meta {property} {content} />
	{/each}

	{#each Object.entries(metaTagsName) as [name, content]}
		<meta {name} {content} />
	{/each}
</svelte:head>

<!-- Attribution: https://tailblocks.cc/ -->
<header class="text-on-primary-weak py-8 flex justify-center">
	<div class="w-full max-w-prose flex flex-wrap flex-col md:flex-row items-center">
		<nav class="flex flex-wrap items-center text-base justify-center">
			<a href="/" class="mr-8 font-medium text-xl border-b-2 border-transparent hover:text-accent hover:border-accent">{siteTitle}</a>
			{#each links as link}
				<a href={link.route} class="ml-8" class:text-accent={$page.path.startsWith(link.route)} class:hover:text-accent={!$page.path.startsWith(link.route)}>{link.name}</a>
			{/each}
		</nav>
	</div>
</header>

<main class="flex-1 py-8 flex flex-col items-center">
	<slot />
</main>

<!-- Attribution: https://tailblocks.cc/ -->
<footer class="bg-primary-dark text-on-primary-weak py-8 flex justify-center">
	<div class="w-full max-w-prose">
    	<p class="text-sm text-on-primary-weak">© {new Date().getFullYear()} {author}</p>
	</div>
</footer>
