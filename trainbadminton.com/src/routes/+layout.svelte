<script lang="ts">
	import favicon from "$lib/assets/icons/favicon.svg";
	import NavBar from "$lib/components/Nav/NavBar.svelte";
	import { NavState } from "$lib/state/NavState.svelte";

	import "../styles/global.css";

	new NavState();

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />
{@render children()}
