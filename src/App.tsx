import React, { useState, useEffect } from "react";
import { UserList } from "./components/UserList";
import { UserProfile } from "./components/UserProfile";
import { Moon, Sun } from "lucide-react";

export const App: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("dark-mode", isDarkMode);
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="main">
			<div className="header centre">
				<h1>Profile Dashboard</h1>
				<button onClick={toggleDarkMode}>
					{isDarkMode ? <Sun /> : <Moon />}
				</button>
			</div>
			<UserList />
			<UserProfile />
		</div>
	);
};

export default App;
