import React, { useState, useEffect } from 'react';
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
	Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const UserMenu = ({user, anchorEl, handleMenuClose, logout}) => {

	const menuOpen = Boolean(anchorEl);
	
	return (
		<Menu
			className="menu"
			id="basic-menu"
			anchorEl={anchorEl}
			open={menuOpen}
			onClose={handleMenuClose}
			MenuListProps={{
				"aria-labelledby": "nav-item-menu",
			}}
			sx={{
				"& .MuiPaper-root": {
					borderRadius: "5px",
					width: "250px",
					// padding: "10px",
				},

				"& .MuiList-root": {
					padding: "10px 10px",
				},
			}}
		>
			{/* <MenuItem>Item</MenuItem> */}
			<MenuItem
				sx={{
					padding: "0px 0px",
					transition: "0.25s all",
					fontWeight: "500",
					borderRadius: "5px",
					// border: "2px solid grey",
					gap: "10px",
					// fontSize: '15px',
					// "&:hover": {
					// 	bgcolor: "black",
					// 	color: "white",
					// },
				}}
			>
				<Accordion
					sx={{
						background: "none",
						color: "black",
						border: "2px solid rgba(150, 150, 150, 0.30)",
						borderRadius: "5px",
						// margin: "10px 0",
						width: {
							xs: "100%",
							md: "100%",
							xl: "100%",
						},
						p: "2.5px 0px",
						boxShadow: "none",
					}}
				>
					<AccordionSummary
						expandIcon={
							<span
								className="material-icons"
								style={{
									color: "black",
								}}
							>
								expand_more
							</span>
						}
					>
						<Stack
							direction={"row"}
							alignItems={"center"}
							gap="10px"
						>
							<Avatar alt={user.name}></Avatar>
							{user.name}
						</Stack>
					</AccordionSummary>
					<AccordionDetails>
						<MenuItem
							sx={{
								padding: "10px 30px",
								transition: "0.25s all",
								fontWeight: "500",
								borderRadius: "5px",
								// fontSize: '15px',
								"&:hover": {
									bgcolor: "black",
									color: "white !important",
								},
								"& a": {
									color: "inherit",
								},
							}}
							key={"account-settings"}
							// onClick={item.func}
						>
							<NavLink to={"/user/"}>Profile</NavLink>
						</MenuItem>
						<MenuItem
							sx={{
								padding: "10px 30px",
								transition: "0.25s all",
								fontWeight: "500",
								borderRadius: "5px",
								// fontSize: '15px',
								"&:hover": {
									bgcolor: "black",
									color: "white",
								},
								"& a": {
									color: "inherit",
								},
							}}
							key={"account-settings"}
							// onClick={item.func}
						>
							<NavLink to="/user/membership">Membership</NavLink>
						</MenuItem>
						<MenuItem
							sx={{
								padding: "10px 30px",
								transition: "0.25s all",
								fontWeight: "500",
								borderRadius: "5px",
								// fontSize: '15px',
								"&:hover": {
									bgcolor: "black",
									color: "white",
								},
								"& a": {
									color: "inherit",
								},
							}}
							key={"account-settings"}
							// onClick={item.func}
						>
							<NavLink to="/user/bookings">Bookings</NavLink>
						</MenuItem>
					</AccordionDetails>
				</Accordion>
			</MenuItem>
			<MenuItem
				sx={{
					padding: "10px 30px",
					transition: "0.25s all",
					fontWeight: "500",
					borderRadius: "5px",
					// fontSize: '15px',
					"&:hover": {
						bgcolor: "black",
						color: "white",
					},
					
					"& a": {
						color: "inherit",
					},
				}}
				key={"help"}
				// onClick={item.}
			>
				<NavLink to="/contact">{"Need Help?"}</NavLink>
			</MenuItem>
			<MenuItem
				sx={{
					padding: "10px 30px",
					transition: "0.25s all",
					fontWeight: "500",
					borderRadius: "5px",
					// fontSize: '15px',
					"&:hover": {
						bgcolor: "black",
						color: "white",
					},
				}}
				key={"log-out"}
				onClick={logout}
			>
				{"Logout"}
			</MenuItem>
		</Menu>
	);
}
 
export default UserMenu;