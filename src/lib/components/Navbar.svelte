<script>
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { createEventDispatcher } from 'svelte';
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

<div class="navbar bg-base-300 shadow-m">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">ReeseP dot com</a>
	</div>
	<div class="flex-none">
		<div
			use:clickOutside
			on:click_outside={() => {
				if (menuVisible) {
					menuVisible = false;
				}
			}}
		>
			<button
				on:click={toggleMenuVisibility}
				tabindex="0"
				class="btn btn-circle btn-primary shadow-lg"
			>
				<div class="indicator">
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
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
					class="menu menu-compact fixed top-13 right-0 z-10 mt-3 p-2 shadow-xl bg-base-300 rounded-box w-52"
				>
					<li><a>About Me</a></li>
					<li><a>Projects</a></li>
					<li><a>Blog</a></li>
					<li><a>Contact</a></li>
					<li>
						<button on:click={changeTheme} class="btn btn-outline">Theme</button>
					</li>
				</ul>
			{/if}
		</div>
	</div>
</div>
