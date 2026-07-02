import { quintInOut, sineInOut } from "svelte/easing";
import { crossfade, scale } from "svelte/transition";

export const [send, receive] = crossfade({
	duration: 300,
	easing: sineInOut,
});
