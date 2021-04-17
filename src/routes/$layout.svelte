<script>
	import "../app.postcss";
	
	// TODO: doesn't actually use ico format
	import faviconIco from "./_favicon.png?width=32&height=32&format=ico";
	import favicon from "./_favicon.png?width=128&height=128&format=png";
	import appleTouchIcon from "./_favicon.png?width=180&height=180&format=png";
</script>

<svelte:head>
	<link rel="icon" href={faviconIco} />
	<link rel="shortcut icon" type="image/png" href={favicon} />
	<link rel="apple-touch-icon" href={appleTouchIcon} />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>

<slot />
