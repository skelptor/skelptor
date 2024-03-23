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
import { createWaitlist } from '../../../services/api';
import { alert } from '../../molecules/CustomAlert/alert';
const Waitlist = ({ open, onClose }) => {
	
	const [email, setEmail] = useState();

	const handleSubmit = async () => {
		const payload = { data: { email } };
		if (!email) {
			return alert({
				message: "Please enter a valid email",
				type: "error",
			});
		}
		try {
			const res = await createWaitlist(payload);
			onClose();
			alert({message: "You have successfully joined our Waitlist.", type: "success"})
		}
		catch (err) {
			alert({
				message: err.response.data.error.message,
				type: "error",
			});
			console.log(err);
		}
	}
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

			<DialogContent sx={{ zIndex: 1, display: "flex", flexDirection: 'column', gap: '1rem', p: "4rem 2rem" }}>
				<div className="heading">Join the Waitlist</div>
				<div className="sub-heading">
					
					Our team is working round the clock to bring our best
					services to you. Join the waitlist to be the first one to be notified about the release. 
				</div>

				<div className="input">
					<input
						type="email"
						placeholder="Enter your email to join the waitlist"
						value={email}
						onInput={e => setEmail(e.target.value)}
					/>

					<Button
						color={"green"}
						variant={"filled"}
						startIcon={
							<span className="material-icons">
								arrow_forward
							</span>
						}
						onClick={handleSubmit}
					></Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
 
export default Waitlist;