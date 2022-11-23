<script lang="ts">
	import FormInput from '$lib/components/FormInput.svelte';
	import Button from '$lib/components/Button.svelte';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login" />
</svelte:head>

{#if !data.user}
	<div class="text-column">
		<h1 class="text-xl p-3 font-semibold">Login</h1>
		<form method="POST" use:enhance>
			<FormInput name="email" type="email" placeholder="email@address.com" />
			<FormInput name="password" type="password" placeholder="hunter2" />
			<Button>Log in</Button>
		</form>
	</div>
{:else}
	<button on:click={() => goto('/')}>Logout</button>
{/if}
