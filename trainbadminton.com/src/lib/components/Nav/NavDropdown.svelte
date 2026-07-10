<script lang="ts">
	import navs from "$lib/config/navigations.json";
	import { quintInOut } from "svelte/easing";
	import { slide } from "svelte/transition";
	import { NavState } from "$lib/state/NavState.svelte";
	import { page } from "$app/state";

	let nav = navs[2];
	let showItems = $state(false);

	const navstate = NavState.get();
	const train = nav.subnav.slice(0, 3);
	const equips = nav.subnav.slice(3, -1);
</script>

<button
	onclick={() => {
		if (showItems) {
			navstate.set(page.url.pathname);
			showItems = false;
		} else {
			navstate.set(nav.url);
			showItems = true;
		}
	}}
>
	{nav.name}
</button>
{#if showItems}
	<div class="dropdown" transition:slide={{ easing: quintInOut }}>
		<ul>
			<li><h4>Training</h4></li>
			{#each train as t}
				<li><a href={t.url}>{t.name}</a></li>
			{/each}
		</ul>
		<ul>
			<li><h4>Equipments</h4></li>
			{#each equips as e}
				<li><a href={e.url}>{e.name}</a></li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	button {
		border: none;
		font-size: 1rem;
	}
	.dropdown {
		position: absolute;
		top: 100%;
		margin-top: 1rem;
		display: flex;
		flex-direction: row;
		gap: 1rem;
		width: max-content;
	}
</style>
