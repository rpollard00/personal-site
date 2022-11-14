<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { PageData } from './$types'
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	
	import '../app.postcss';
	export let data: PageData;
	let selectedTheme = 0;
	const themes = ['light', 'dark', 'retro', 'cyberpunk'];

	onMount(() => {
		themeChange(false);
	});

	const setTheme = (event: any) => {
		//console.log('selectedTheme', selectedTheme);
		if (selectedTheme < themes.length - 1) {
			selectedTheme += 1;
		} else {
			selectedTheme = 0;
		}
	};
</script>

<div data-theme={themes[selectedTheme]} class="app flex flex-col  h-screen">
	<header>
		<Navbar on:changeTheme={setTheme} user={data.user}/>
	</header>

	{#if data.user }
	Hello { data.user.email }
	{/if}

	<main class="flex flex-col grow">
		<slot />
	</main>

	<footer class="flex flex-end justify-center">
		<!-- <div> -->
		<p>This is the footer</p>
		<!-- </div> -->
	</footer>
</div>
