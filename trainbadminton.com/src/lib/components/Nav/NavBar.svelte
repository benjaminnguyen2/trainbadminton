<script lang="ts">
	import navs from "$lib/config/navigations.json";
	import Logo from "$lib/assets/icons/Logo.svelte";
	import { send, receive } from "$lib/transitions/transitions";
	import NavElement from "./NavElement.svelte";
</script>

<nav>
	<ul>
		<li class="logo">
			<Logo />
			<h2>Badminton Trainer</h2>
		</li>
		{#each navs as nav, index (index)}
			<li>
				<NavElement id={index} {nav} {send} {receive} />
			</li>
		{/each}
	</ul>
</nav>

<style>
	.logo {
		display: flex;
		flex-direction: row;
		font-family: "Daggersquare", sans-serif;
	}
	ul {
		display: flex;
		flex-direction: row;
		align-items: stretch;
		padding: 0 1rem;
		gap: 2rem;
		position: relative;
	}
	li {
		padding: 0 1rem;
		position: relative;
		display: flex;
		align-items: center;
	}
	li:before {
		content: "";
		width: 100%;
		height: 4px;
		background: var(--foreground-light);
		position: absolute;
		top: 0;
		left: 0.25rem;
		z-index: -1;
		transform: skewX(-10deg);
	}
	h2 {
		padding: 1rem 0;
	}
	li:nth-last-child(2) {
		cursor: default;
	}
	li:last-of-type {
		margin-left: auto;
	}
</style>
