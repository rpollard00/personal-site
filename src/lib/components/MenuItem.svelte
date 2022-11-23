<script lang="ts">
	export let href: string;
	let classes: string;
	export { classes as class };
</script>

<li class={classes}><a {href}><slot /></a></li>
