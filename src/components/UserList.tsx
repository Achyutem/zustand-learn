import React, { useState } from "react";
import { useUserStore } from "../useUserStore";

export const UserList: React.FC = React.memo(() => {
	const { users, selectedUserId, selectUser } = useUserStore();
	const [showAdminsOnly, setShowAdminsOnly] = useState(false);

	const showFilteredUsers = showAdminsOnly
		? users.filter((user) => user.isAdmin)
		: users;

	return (
		<div>
			<button onClick={() => setShowAdminsOnly((prev) => !prev)}>
				{showAdminsOnly ? "show all users" : "show admin only"}
			</button>
			<h2>Users</h2>
			<ul>
				{showFilteredUsers.map((user) => (
					<li
						key={user.id}
						style={{
							fontWeight: user.id === selectedUserId ? "bold" : "normal",
							cursor: "pointer",
						}}
						onClick={() => selectUser(user.id)}
					>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
});
