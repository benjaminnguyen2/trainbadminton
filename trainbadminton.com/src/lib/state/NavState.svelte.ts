import { setContext, getContext } from "svelte";

const KEY = Symbol();

export class NavState {
	highlight: string = $state("/");

	constructor() {
		setContext(KEY, this);
	}

	static get(): NavState {
		return getContext<NavState>(KEY);
	}

	set(input: string): void {
		this.highlight = input;
	}

	checkSubnav(input: string): void {}
}
