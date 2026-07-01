<script lang="ts">
	import favicon from "$lib/assets/icons/favicon.svg";
	import NavBar from "$lib/components/Nav/NavBar.svelte";

	import "../styles/global.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />
{@render children()}
