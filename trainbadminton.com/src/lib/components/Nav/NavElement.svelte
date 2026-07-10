<script lang="ts">
	import { NavState } from "$lib/state/NavState.svelte";
	import NavDropdown from "./NavDropdown.svelte";

	let { id, nav, send, receive } = $props();

	const navstate: NavState = NavState.get();
</script>

{#if nav.subnav.length > 0}
	<NavDropdown />
{:else}
	<a href={nav.url}>{nav.name}</a>
{/if}
{#if navstate.highlight == nav.url}
	<div
		class="highlighter skewed"
		in:receive={{ key: "nav-highlight" }}
		out:send={{ key: "nav-highlight" }}
	></div>
{/if}

<style>
	.highlighter {
		background: var(--highlight);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 60%;
		z-index: -1;
		display: block;
		transform: translateY(30%) skewX(-10deg);
	}
</style>
