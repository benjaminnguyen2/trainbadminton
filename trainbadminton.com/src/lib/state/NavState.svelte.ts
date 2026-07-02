import { setContext, getContext } from "svelte";

const KEY = Symbol();

export class NavState {
	highlight: number = $state(-1);

	constructor() {
		setContext(KEY, this);
	}

	static get(): NavState {
		return getContext<NavState>(KEY);
	}

	set(input: number): void {
		this.highlight = input;
	}
}
