import React, { useEffect } from "react";
import { UserList } from "./components/UserList";
import { UserProfile } from "./components/UserProfile";
import { Moon, Sun } from "lucide-react";
import { useUserStore } from "./useUserStore";

export const App: React.FC = () => {
	const { isDarkMode, setDarkMode, showAdminsOnly, setShowAdminsOnly } =
		useUserStore();

	useEffect(() => {
		document.body.classList.toggle("dark-mode", isDarkMode);
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	return (
		<div className="main">
			<div className="header centre">
				<h1>Profile Dashboard</h1>
				<div className="button-group">
					<button
						className="admin-button"
						onClick={() => setShowAdminsOnly(!showAdminsOnly)}
					>
						{showAdminsOnly ? "all users" : "admin only"}
					</button>
					<button className="theme-button" onClick={toggleDarkMode}>
						{isDarkMode ? <Sun /> : <Moon />}
					</button>
				</div>
			</div>
			<UserList />
			<UserProfile />
		</div>
	);
};

export default App;
