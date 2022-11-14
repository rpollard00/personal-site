<script>
	import FormInput from '$lib/components/FormInput.svelte'
	import Button from '$lib/components/Button.svelte'
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="Login" />
</svelte:head>

<div class="text-column">
	<h1 class="text-xl p-3 font-semibold">Login</h1>
	<form method="POST">
		<FormInput name="email" type="email" placeholder="email@address.com" />
		<FormInput name="password" type="password" placeholder="hunter2" />
		<Button>Log in</Button>
	</form>
</div>
