<script lang="ts">
	import Blog from './Blog.svelte';

	const fetchBlogs = (async () => {
		const res = await fetch(
			'http://127.0.0.1:8090/api/collections/blogs/records?page=1&perPage=30',
			{
				cache: 'no-store'
			}
		);
		
		return await res.json();
	})();
</script>

<div class="p-2">
<h1 class="text-3xl font-sans font-bold mb-4 ">Blogs</h1>
{#await fetchBlogs}
	<p>...waiting</p>
{:then blogs}
	{#each blogs.items as { title, content, created }}
		<Blog title={title} content={content} created={created} />
	{/each}
{:catch error}
	<p>an error occurred...</p>
{/await}
</div>