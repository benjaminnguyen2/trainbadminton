export interface NavData {
	name: string;
	url: string;
	subnav: Array<NavData>;
}

export interface NavChildren {
	data: NavData;
	isLast?: Boolean;
	index: Number;
	active?: Number;
	parent?: string;
	children?: Snippet;
}
