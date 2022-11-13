<script lang="ts">
  import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
</script>

<svelte:head>
	<title>Error</title>
	<meta name="description" content="Error" />
</svelte:head>

<div class="text-column">
	<h1 class="text-xl p-3 font-semibold">{$page.status}: {$page.error?.message}</h1>
	<p class="pl-3">
		Something definitely went wrong...
	</p>
	<p />
</div>
