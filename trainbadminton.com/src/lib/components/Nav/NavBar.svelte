<script lang="ts">
	import NavItem from "./NavItem.svelte";
	import navs from "$lib/config/navigations.json";
	import { page } from "$app/state";
	import Logo from "$lib/assets/icons/Logo.svelte";

	let active = $state(-1);

	const items = navs.slice(0, -1);

	$effect(() => {
		active = items.findIndex((i) => i.url === page.params.method);
	});
</script>

<nav>
	<ul>
		<li>
			<div class="logo">
				<Logo />
				<h2>Badminton Trainer</h2>
			</div>
		</li>
		{#each items as item, i_index}
			<li><a href={item.url}>{item.name}</a></li>
		{/each}
		<li><button>{navs[navs.length - 1].name}</button></li>
	</ul>
</nav>

<style>
	nav {
		padding: 1rem 0;
	}
	.logo {
		display: flex;
		flex-direction: row;
		font-family: "Daggersquare", sans-serif;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 1rem;
		gap: 2rem;
	}
	h2 {
		padding: 1rem 0;
	}
	ul:last-child {
	}
</style>
