import React, { useState, useEffect } from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	IconButton,
} from "@mui/material";
import Button from '../../atoms/Button/Button';
import "./Waitlist.css";
const Waitlist = ({open, onClose}) => {
	return (
		<Dialog open={open} onClose={onClose} className="waitlist">
			<div className="bg">
				<img src="/assets/vectors/vector-2.png" alt="" />
			</div>
			<DialogTitle
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-end",
					border: "0px solid red",
					p: "1px 1rem"
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

			<DialogContent sx={{ zIndex: 1, display: "flex", flexDirection: 'column', gap: '1rem' }}>
				<div className="heading">Join the Waitlist</div>
				<div className="sub-heading">
					
					Our team is working round the clock to bring our best
					services to you. Join the waitlist to be the first one to be notified about the release. 
				</div>

				<div className="input">
					<input
						type="email"
						placeholder="Enter your email to join the waitlist"
					/>

					<Button
						color={"green"}
						variant={"filled"}
						startIcon={
							<span className="material-icons">
								arrow_forward
							</span>
						}
					></Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
 
export default Waitlist;