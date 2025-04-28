import React, { lazy, Suspense } from "react";
import { useUserStore } from "../useUserStore";

const UserDetails = lazy(() => import("./UserDetail"));

export const UserProfile: React.FC = React.memo(() => {
	const { users, selectedUserId, isLoading } = useUserStore();
	const selectedUser = users.find((u) => u.id === selectedUserId);

	if (!selectedUser) {
		return <div>No user selected</div>;
	}

	if (isLoading) {
		return <div>...isLoading</div>;
	}

	return (
		<div>
			<h2>Profile</h2>
			<Suspense fallback={<div>Loading user details...</div>}>
				<UserDetails />
			</Suspense>
		</div>
	);
});
