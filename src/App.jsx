import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/organisms/Navbar/Navbar";
import Footer from "./components/organisms/Footer/Footer";
import AuthForm from "./components/organisms/AuthForm/AuthForm";
import AllRoutes from "./Routes";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const [authOpen, setAuthOpen] = useState(false);
	const [emailVerificationOpen, setEmailVerificationOpen] = useState(false);

	const login = (userData, jwt) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
		localStorage.setItem("jwt", JSON.stringify(jwt));
	};
	const logout = () => {
		setUser(null);
		localStorage.setItem("user", JSON.stringify(null));
		localStorage.removeItem("jwt");
	};

	const handleAuthOpen = () => {
		setAuthOpen(true);
	};
	const handleAuthClose = () => {
		setAuthOpen(false);
		
	};

	return (
		<div className="App">
			<Router>
				<Navbar></Navbar>
				<AllRoutes
					onAuthClose={handleAuthClose}
					onAuthOpen={handleAuthOpen}
					authOpen={authOpen}
					// emailVerificationOpen={emailVerificationOpen}
					user={user}
					login={login}
					logout={logout}
				></AllRoutes>
				<AuthForm
					open={authOpen}
					onClose={handleAuthClose}
					user={user}
					login={login}
					logout={logout}
				></AuthForm>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
