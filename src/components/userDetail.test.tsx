import { render, screen } from "@testing-library/react";
import UserDetails from "./UserDetail";
import { useUserStore } from "../useUserStore";

describe("UserDetails", () => {
	it("renders user details correctly", () => {
		useUserStore.setState({
			users: [
				{ id: 1, name: "Alice", email: "alice@email.com", isAdmin: true },
			],
			selectedUserId: 1,
			selectedUser: {
				id: 1,
				name: "Alice",
				email: "alice@email.com",
				isAdmin: true,
			},
			isLoading: false,
			selectUser: () => {},
			setLoading: () => {},
		});

		render(<UserDetails />);

		expect(screen.getByText(/Name:/)).toBeInTheDocument();
		expect(screen.getByText("Alice")).toBeInTheDocument();
		expect(screen.getByText("alice@email.com")).toBeInTheDocument();
	});
});
