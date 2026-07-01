<script lang="ts">
	import type { NavChildren } from "$lib/types/interfaces";

	let {
		data = {
			name: "",
			url: "",
			subnav: [],
		},
		isLast = false,
		active = $bindable(),
		index = -1,
		parent = "",
		children,
	}: NavChildren = $props();
</script>
