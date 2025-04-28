import { useUserStore } from "../useUserStore";

const UserDetails = () => {
	const { users, selectedUserId } = useUserStore();
	const user = users.find((u) => u.id === selectedUserId);

	if (!user) {
		return <div>No user selected</div>;
	}

	return (
		<div>
			<p>
				<strong>Name:</strong> {user.name}
			</p>
			<p>
				<strong>Email:</strong> {user.email}
			</p>
		</div>
	);
};

export default UserDetails;
