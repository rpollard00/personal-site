<script lang="ts">
	const menu = document.getElementById('menu');
	let current: any = 'none';
	export let menuVisible: any;
	export let toggleMenuVisibility: any;

	let menuItems: any = [
		{
			href: '/',
			text: 'Home'
		},
		{
			href: '/blog',
			text: 'Blog'
		},
		{
			href: '/contacts',
			text: 'Contacts'
		},
		{
			href: '/projects',
			text: 'Projects'
		},
		{
			href: '/resume',
			text: 'Resume'
		}
	];

	const doSomething = (event: Event) => {
		toggleMenuVisibility();
		console.log('EVENT', event.target);
		console.log('Menu visibility', menuVisible);
	};
</script>

<div data-active={current} id="menu">
	<ul id="menu-items">
		{#each menuItems as { text, href }}
			<li
				on:mouseenter={() => (current = text)}
				on:mouseleave={() => (current = 'none')}
				class="menu-item {current === text ? 'selected' : ''}"
				{href}
			>
				<a on:click={doSomething} {href}>{text}</a>
			</li>
		{/each}
	</ul>
	<div id="menu-background-pattern"><div id="blur" /></div>
</div>

<style>
	#menu {
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
	}

	#menu-items:hover > .menu-item {
		opacity: 0.5;
	}

	#menu-items:hover > .menu-item:hover {
		opacity: 1;
	}

	.menu-item {
		color: white;
		font-size: clamp(3rem, 8vw, 8rem);
		font-family: 'Ibarra Real Nova', serif;

		display: block;
		text-decoration: none;
		padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
		transition: font-size 200ms ease;
	}

	#menu-items {
		margin-left: clamp(4rem, 20vw, 40rem);
		position: relative;
		z-index: 4;
	}

	#menu-background-pattern {
		height: 100vh;
		width: 100vw;

		/* background-image: radial-gradient(
      rgba(255,255,255,0.1), 11%,
      transparent 9%
    ); */
		background-image: linear-gradient(
			45deg,
			transparent 16.67%,
			#2d3134 16.67%,
			#2d3134 50%,
			transparent 50%,
			transparent 66.67%,
			#2d3134 66.67%,
			#2d3134 100%
		);
		background-position: 0% 0%;
		background-size: 12vmin 12vmin;

		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 1;

		transition: opacity 800ms ease, background-position 1000ms ease;
	}

	#menu-items:hover ~ #menu-background-pattern {
		opacity: 0.5;
	}

	#menu-items:hover ~ #menu-background-pattern > #blur {
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(10px);
		height: 100vh;
		width: 100vw;
		z-index: 1;
	}

	.selected {
		font-size: clamp(3rem, 10vw, 8rem);
		transition: font-size 200ms ease;
	}

	#menu[data-active='Home'] > #menu-background-pattern {
		background-position: 0% -10%;
	}

	#menu[data-active='Blog'] > #menu-background-pattern {
		background-position: 0% -20%;
	}

	#menu[data-active='Contacts'] > #menu-background-pattern {
		background-position: 0% -30%;
	}

	#menu[data-active='Project'] > #menu-background-pattern {
		background-position: 0% -40%;
	}

	#menu[data-active='Resume'] > #menu-background-pattern {
		background-position: 0% -50%;
	}
</style>
