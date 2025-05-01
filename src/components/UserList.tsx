import React from "react";
import { useUserStore } from "../useUserStore";

export const UserList: React.FC = React.memo(() => {
	const { users, selectedUserId, selectUser, showAdminsOnly } = useUserStore();

	const showFilteredUsers = showAdminsOnly
		? users.filter((user) => user.isAdmin)
		: users;

	return (
		<div>
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
