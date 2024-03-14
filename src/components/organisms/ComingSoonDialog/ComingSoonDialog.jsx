import React, { useState, useEffect } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	IconButton
} from "@mui/material";
import "./ComingSoonDialog.css";
import Button from "../../atoms/Button/Button";

const ComingSoonDialog = ({ open, onClose }) => {
	return (
		<Dialog open={open} onClose={onClose} className="comingsoon">
			<div className="bg">
				<img src="/assets/vectors/vector-2.png" alt="" />
			</div>
			<DialogTitle
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-end",
				}}
			>
				<IconButton onClick={onClose}>
					<span
						className="material-icons"
						style={{
							color: "black",
						}}
					>
						close
					</span>
				</IconButton>
			</DialogTitle>

			<DialogContent sx={{ zIndex: 1 }}>
				<div className="title">Coming Soon</div>
				Thanks for your patience! Our team is working round the clock to
				bring our best services to you. <br />
				<br />
				Contact our customer service{" "}
				<a className="link" href="mailto:support@goodtimesvacation.com">
					support@goodtimesvacation.com
				</a>{" "}
				for more information about our upcoming services and our hiring
				process.
				<br />
				<br />
				<Button
					innerText={"Contact Us"}
					variant={"filled"}
					color={"red"}
					// onClick=
					// loading={loading}
				></Button>
			</DialogContent>
		</Dialog>
	);
};

export default ComingSoonDialog;
