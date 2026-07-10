<script lang="ts">
	import { page } from "$app/state";
	import favicon from "$lib/assets/icons/favicon.svg";
	import NavBar from "$lib/components/Nav/NavBar.svelte";
	import { NavState } from "$lib/state/NavState.svelte";

	import "../styles/global.css";

	new NavState();
	const navstate: NavState = NavState.get();

	let { children } = $props();

	$effect(() => {
		navstate.set(page.url.pathname);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />
{@render children()}
