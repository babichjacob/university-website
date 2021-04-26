<script context="module">
    export const load = async ({ fetch }) => {
        const response = await fetch("/blog.json");

        const { posts } = await response.json();

        return {
            props: {
                posts,
            }
        };
    };
</script>

<script>
    export let posts;
</script>

<div class="max-w-prose py-12">
    <h1 class="text-2xl font-medium">All posts from the blog:</h1>

    <div class="divide-y-2 divide-primary-weak">
        {#each posts as post}
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="mt-1 text-on-primary-weak text-sm">{new Date(post.created).toLocaleString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
                <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-on-primary font-heading mb-2">{post.title}</h2>
                    <p class="leading-relaxed text-on-primary-weak">{post.subtitle}</p>
                    <a class="text-accent border-b-2 border-transparent hover:border-accent inline-flex items-center mt-4" href="/blog/{post.slug}">Read on
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>
