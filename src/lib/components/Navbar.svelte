<script>
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { createEventDispatcher } from 'svelte';
	import MenuItem from './MenuItem.svelte';
	import { fade } from 'svelte/transition';

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

<div class="bg-base-300 bg-slate-300 pb-2 shadow-md">
	<div class="flex-1">
		<a href="/" class="normal-case text-xl">ReeseP dot com</a>
	</div>
	<div class="flex flex-row justify-end content-between">
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
				<MenuItem url="blog" text="Blog" />
				<li><a>Projects</a></li>
				<li><a>Contact</a></li>
				<li>
					<button on:click={changeTheme} class="btn btn-outline">Theme</button>
				</li>
			</ul>
		{/if}
	</div>
</div>
