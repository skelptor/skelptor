import React, { useState, useEffect } from "react";
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
import "./CategoryMenu.css"

const CategoryMenu = ({ anchorEl, handleMenuClose }) => {
	const menuOpen = Boolean(anchorEl);

	const categories = [
		{
			name: "Waist",
			img: "category1.jpg",
		},
		{
			name: "Breasts",
			img: "category1.jpg",
		},
		{
			name: "Nose",
			img: "category1.jpg",
		},
		{
			name: "Skin",
			img: "category1.jpg",
		},
		{
			name: "Neck",
			img: "category1.jpg",
		},
		{
			name: "Jawline",
			img: "category1.jpg",
		},
		{
			name: "Lips",
			img: "category1.jpg",
		},
	];

	return (
		<Menu
			className="category-menu"
			id="category-menu"
			anchorEl={anchorEl}
			open={menuOpen}
			onClose={handleMenuClose}
			MenuListProps={{
				"aria-labelledby": "category-item-menu",
			}}
			sx={{
				"& .MuiPaper-root": {
					borderRadius: "0px",
					width: "300px",
					border: "1px solid black",
					boxShadow: 'none'
					// padding: "10px",
				},

				"& .MuiList-root": {
					padding: "10px 10px",
				},
			}}
		>
			{/* <MenuItem>Item</MenuItem> */}
			{categories.map((item) => (
				<MenuItem
					sx={{
						padding: "15px 30px",
						transition: "0.25s all",
						fontSize: "1.1rem",
						fontWeight: "500",
						borderRadius: "0px",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "20px",
						// border: "1px solid black",
						// borderBottom: "0.5px",
						// fontSize: '15px',
						
						"&:hover": {
							bgcolor: "var(--beige-dark)",
							color: "white",
						},

						"& a": {
							color: "inherit",
						},
					}}
					key={"help"}
					// onClick={item.}
				>
					<div className="img">
						<img src={"./assets/imgs/" + item.img} alt="" />
					</div>
					{item.name}
				</MenuItem>
			))}
		</Menu>
	);
};

export default CategoryMenu;
