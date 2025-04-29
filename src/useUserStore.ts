import { create } from "zustand";

type User = {
	id: number;
	name: string;
	email: string;
	isAdmin: boolean;
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
		{ id: 1, name: "Alice", email: "alice@email.com", isAdmin: true },
		{ id: 2, name: "Bob", email: "bob@email.com", isAdmin: false },
		{ id: 3, name: "Charlie", email: "charlie@email.com", isAdmin: true },
		{ id: 4, name: "David", email: "david@email.com", isAdmin: false },
		{ id: 5, name: "Eve", email: "eve@email.com", isAdmin: false },
		{ id: 6, name: "Frank", email: "frank@email.com", isAdmin: true },
		{ id: 7, name: "Grace", email: "grace@email.com", isAdmin: false },
		{ id: 8, name: "Heidi", email: "heidi@email.com", isAdmin: true },
		{ id: 9, name: "Ivan", email: "ivan@email.com", isAdmin: true },
		{ id: 10, name: "Judy", email: "judy@email.com", isAdmin: false },
		{ id: 11, name: "Mallory", email: "mallory@email.com", isAdmin: false },
		{ id: 12, name: "Niaj", email: "niaj@email.com", isAdmin: false },
		{ id: 13, name: "Olivia", email: "olivia@email.com", isAdmin: false },
	],
	selectedUserId: 1,
	selectUser: (id: number) => set({ selectedUserId: id }),
	isLoading: false,
	setLoading: (value) => set({ isLoading: value }),
	selectedUser: undefined,
}));
