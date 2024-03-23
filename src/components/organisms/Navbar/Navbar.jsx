import { useState, useEffect } from "react";
import {
	Drawer,
	Divider,
	Avatar,
	Menu,
	MenuItem,
	IconButton,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Stack
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import "./Navbar.css";
import Waitlist from "../Waitlist/Waitlist";

const Navbar = ({}) => {
	const [dialogOpen, setDialogOpen] = useState(false);
	// const [authOpen, setAuthOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	// const [emailVerificationOpen, setEmailVerificationOpen] = useState(false);
	const [menuItems, setMenuItems] = useState([]);
	const menuOpen = Boolean(anchorEl);
	

	const { innerWidth: width, innerHeight: height } = window;
	// console.log(width, height);

	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};
	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	const handleMenuOpen = (event) => {
		// handleSetMenuItems(event.currentTarget.id);
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		// return navigate("/");
	};
	const [waitlistOpen, setWaitlistOpen] = useState(false);
	
	const handleLinkClick = () => {
		// setMenuOpen(false);
		handleDrawerClose();
	};

	
	

	return (
		<>
			<div className="navbar">
				<div className="left-col">
					<Link to="/" className="logo">
						<div className="logo">skelptor</div>
					</Link>

					{width > 720 && (
						<div className="nav-items">
							{width >= 720 && (
								<>
									<NavLink
										id="nav-home"
										className={"item"}
										to="/"
									>
										Home
									</NavLink>
									<NavLink
										id="nav-resorts"
										className={"item"}
										to="/blogs"
									>
										Blogs
									</NavLink>
									<NavLink
										id="nav-membership"
										className={"item"}
										to="/ai"
									>
										Skelptor.Ai
									</NavLink>
								</>
							)}
						</div>
					)}
				</div>
				{width <= 720 && (
					<>
						<Button
							id="drawer-open-btn"
							onClick={handleDrawerOpen}
							variant="filled"
							color="white"
							innerText={
								<span
									className="material-icons"
									style={{ color: "var(--red)" }}
								>
									menu
								</span>
							}
						></Button>
					</>
				)}
				{width > 720 && (
					<div className="nav-items">
						{width >= 720 && (
							<>
								<Button
									variant={"filled"}
									color="green"
									size="large"
									innerText={"JOIN WAITLIST"}
									onClick={() => setWaitlistOpen(true)}
								></Button>
							</>
						)}
					</div>
				)}
			</div>
			<Drawer
				variant="persistent"
				anchor="left"
				open={drawerOpen}
				className="drawer"
			>
				<Button
					id="drawer-close-btn"
					onClick={handleDrawerClose}
					variant="text"
					color="purple"
					size="large"
					className={"drawer-close-btn"}
					innerText={<span className="material-icons">close</span>}
				></Button>
				{/* <div className="title">Good Times Vacation</div> */}
				<Divider />
				<div className="nav-items">
					<NavLink
						className={"item"}
						to="/"
						onClick={handleLinkClick}
					>
						Home
					</NavLink>
					<NavLink
						className={"item"}
						to="/blogs"
						onClick={handleLinkClick}
					>
						Blogs
					</NavLink>
					<NavLink
						className={"item"}
						to="/ai"
						onClick={handleLinkClick}
					>
						Skelp.Ai
					</NavLink>
				</div>
			</Drawer>
			<Waitlist open={waitlistOpen} onClose={() => setWaitlistOpen(false)}></Waitlist>
		</>
	);
};

export default Navbar;
