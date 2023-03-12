export interface PinnedItem {
	__typename: string;
	id: string;
	name: string;
	description: string;
	stargazerCount: number;
	url: string;
	languages: string[];
}
