import { create } from "zustand";

type User = {
	id: number;
	name: string;
	email: string;
};

interface UserStore {
	users: User[];
	selectedUserId: number;
	selectUser: (id: number) => void;
	selectedUser: User | undefined;
	isLoading: boolean;
	setLoading: (value: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
	users: [
		{ id: 1, name: "Alice", email: "alice@email.com" },
		{ id: 2, name: "Bob", email: "bob@email.com" },
		{ id: 3, name: "Charlie", email: "charlie@email.com" },
	],
	selectedUserId: 1,
	selectUser: (id: number) => set({ selectedUserId: id }),
	isLoading: false,
	setLoading: (value) => set({ isLoading: value }),
	selectedUser: undefined,
}));
