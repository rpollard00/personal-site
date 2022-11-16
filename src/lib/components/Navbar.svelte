<script lang="ts">
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { createEventDispatcher } from 'svelte';
	import MenuItem from './MenuItem.svelte';
	import { fade } from 'svelte/transition';	
	import { dataset_dev } from 'svelte/internal';
	export let user: any;

	const dispatch = createEventDispatcher();

	const changeTheme = () => {
		dispatch('changeTheme', {});
	};

	let menuVisible = false;

	const toggleMenuVisibility = () => {
		console.log('Toggle Vis');
		menuVisible = !menuVisible;
	};
</script>

<div class="bg-base-300 bg-slate-300 pb-2 pt-2 shadow-md flex flex-row">
	<a href="/" class="normal-case text-xl mr-auto">ReeseP dot com</a>
	<div class="flex-0 content-between">
		<button
			on:click={toggleMenuVisibility}
			tabindex="0"
			class="bg-slate-500 w-10 h-10 shadow-lg mr-2 rounded-md"
		>
			<div class="indicator">
				<svg
					class="w-6 h-6 ml-auto mr-auto"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path style="stroke:white"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/></svg
				>
				<!-- <span class="badge badge-sm indicator-item">8</span> -->
			</div>
		</button>
		{#if menuVisible}
			<ul
				transition:fade
				class="fixed top-[4rem] right-2 z-10 mt-3 p-2 shadow-xl bg-slate-600 rounded-md w-52 text-slate-100"
			>
				<MenuItem url="/about" text="About Me"/>
				<MenuItem url="/blog" text="Blog" />
				<MenuItem url="/contact" text="Contact" />
				<MenuItem url="/projects" text="Projects" />
				<MenuItem url="/resume" text="Resume" />
				{#if !user}
				<MenuItem url="/login" text="Login" />
				{/if}
			</ul>
		{/if}
	</div>
</div>
