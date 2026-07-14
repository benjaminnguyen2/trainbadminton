<script lang="ts">
	import { quintInOut } from "svelte/easing";
	import { slide } from "svelte/transition";
	import { NavState } from "$lib/state/NavState.svelte";
	import { page } from "$app/state";
	import { clickOutside } from "$lib/utils/ClickDetect";

	let { nav } = $props();
	let showItems = $state(false);

	const navstate = NavState.get();

	function enableDropdown(): void {
		if (!showItems) {
			navstate.set(nav.url);
			showItems = true;
		}
	}

	function disableDropdown(): void {
		navstate.set(page.url.pathname);
		showItems = false;
	}

	$effect(() => {
		if (navstate.highlight != nav.url) {
			showItems = false;
		}
	});
</script>

<button
	onclick={(e) => {
		e.stopPropagation();
		if (showItems) {
			disableDropdown();
		} else {
			enableDropdown();
		}
	}}
>
	{nav.name}
</button>
{#if showItems}
	<div
		use:clickOutside={() => {
			disableDropdown();
		}}
		class="dropdown"
		transition:slide={{ easing: quintInOut }}
	>
		<ul>
			{#each nav.subnav as t}
				<li><a href={t.url}>{t.name}</a></li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	button {
		border: none;
		font-size: 1rem;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	li {
		position: relative;
		padding: 0.4rem 0.8rem;
	}
	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		display: flex;
		flex-direction: row;
		width: max-content;
		justify-content: space-evenly;
		align-items: stretch;
		border-left: 3px dashed var(--foreground-light);
		padding: 0 0.5rem;
		background: var(--background);
	}
	a:hover {
		color: var(--highlight);
	}
	a::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--foreground-dark);
		opacity: 0.1;
		clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
	}
	a:hover::before {
		clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%);
		transition: all 0.4s cubic-bezier(0, 0.7, 0, 1);
	}
</style>
