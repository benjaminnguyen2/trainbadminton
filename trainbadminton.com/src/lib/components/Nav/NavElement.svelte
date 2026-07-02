<script lang="ts">
	import { NavState } from "$lib/state/NavState.svelte";

	let { id, send, receive, children } = $props();

	const navstate: NavState = NavState.get();
</script>

<button
	onclick={() => {
		navstate.set(id);
	}}
>
	{@render children()}
	{#if navstate.highlight == id}
		<div
			class="highlighter"
			in:receive={{ key: "nav-highlight" }}
			out:send={{ key: "nav-highlight" }}
		></div>
	{/if}
</button>

<style>
	.highlighter {
		background: var(--highlight);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		display: block;
		clip-path: polygon(100% 10%, calc(100% - 5px) 80%, 0% 80%, 5px 10%);
	}
	button {
		border: none;
		font-size: 1rem;
		position: relative;
	}
</style>
