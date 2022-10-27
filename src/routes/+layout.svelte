<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';

	let menuVisible = false;

	const toggleNav = () => {
		menuVisible = !menuVisible;
	};
</script>

<div class="app flex flex-col">
	<header>
		<Navbar />
	</header>

	<main class="flex flex-col grow">
		<slot />
	</main>

	<footer class="flex flex-end justify-center">
		<!-- <div> -->
		<p>This is the footer</p>
		<!-- </div> -->
	</footer>
</div>
