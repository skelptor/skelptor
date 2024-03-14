import React, { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import Blogs from "./screens/Blogs/Blogs";
import Ai from "./screens/Ai/Ai";
import Blog from "./screens/Blogs/Blog";
import Editor from "./screens/BlogEditor/Editor";

const AllRoutes = ({
	login,
	logout,
	user,
	emailVerificationOpen,
	authOpen,
	onAuthOpen,
	onAuthClose,
}) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Routes>
			<Route exact path="/" element={<Home></Home>}></Route>
			<Route exact path="/blogs">
				<Route
					path=""
					element={
						<Blogs
							onAuthClose={onAuthClose}
							onAuthOpen={onAuthOpen}
							authOpen={authOpen}
							emailVerificationOpen={emailVerificationOpen}
							login={login}
							logout={logout}
							user={user}
						></Blogs>
					}
				></Route>
				<Route
					path=":blogId"
					element={
						<Blog
							onAuthClose={onAuthClose}
							onAuthOpen={onAuthOpen}
							authOpen={authOpen}
							emailVerificationOpen={emailVerificationOpen}
							login={login}
							logout={logout}
							user={user}
						></Blog>
					}
				></Route>
				<Route
					path="new"
					element={
						<Editor
							onAuthClose={onAuthClose}
							onAuthOpen={onAuthOpen}
							authOpen={authOpen}
							emailVerificationOpen={emailVerificationOpen}
							login={login}
							logout={logout}
							user={user}
						></Editor>
					}
				></Route>
			</Route>
			<Route exact path="/ai" element={<Ai></Ai>}></Route>
		</Routes>
	);
};

export default AllRoutes;