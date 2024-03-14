import React, { useState, useEffect } from 'react';
import Button from "../../atoms/Button/Button";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	IconButton,
	TextField
} from "@mui/material";
import "./AuthForm.css";
import { alert } from '../../molecules/CustomAlert/alert';
// import { forgotPassword } from '../../../services/api';

const ForgotPassword = ({ open, onClose }) => {
	const [email, setEmail] = useState();

	const handleSubmit = async () => {
		if (!email) {
			alert({ message: 'Please enter your email', type: 'error' });
		}
		else {
			const payload = { email };

			try {
				// await forgotPassword(payload);
				alert({message: 'Please check your Email for further steps', type: 'success'})
			}
			catch (err) {
				alert({
					message: err.response.data.message || err.message,
					type: "error",
				});
			}
		}
	}

	return (
		<Dialog
			className={`form authform forgot-password`}
			open={open}
			// keepMounted
			onClose={onClose}
			aria-describedby="basic form area"
			// TransitionComponent={Transition}
			sx={{
				borderRadius: "5px",
				padding: 0,
				"& .MuiPaper-root": {
					width: "30%",
					minWidth: "350px",
					height: "fit-content",
				},
			}}
		>
			<div className="bg">
				<img src="/assets/vectors/vector-2.png" alt="" />
			</div>

			<DialogContent
				sx={{
					zIndex: 3,
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					justifyContent: "space-between",
					padding: 0,
					margin: 0,
					height: "100%",
					position: "relative",
				}}
			>
				<IconButton
					variant="outlined"
					sx={{
						// color: "black",
						position: "absolute",
						top: "20px",
						right: "40px",
					}}
				>
					<span onClick={onClose} className="material-icons">
						close
					</span>
				</IconButton>
				<div className="content">
					<div className="title">Forgot Password</div>
					<div className="form-group">
						<TextField
							label={"Email"}
							type="email"
							fullWidth
							aria-labelledby="Email"
							onChange={(e) => setEmail(e.target.value)}
						></TextField>

						<Button
							variant="filled"
							color="red"
							innerText={"Confirm"}
							onClick={handleSubmit}
						></Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
 
export default ForgotPassword;