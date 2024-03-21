import React, { useState, useEffect } from "react";
import "./AuthForm.css";
import Button from "../../atoms/Button/Button";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Slide,
	IconButton,
} from "@mui/material";
import MUITextfield from "../../atoms/MUITextField/MUITextfield";
import { signupAuth, loginAuth } from "../../../services/api";
import { alert } from "../../molecules/CustomAlert/alert";
import ForgotPassword from "./ForgotPassword";

const AuthForm = ({ open, user, login, logout, onClose }) => {
	const [signup, setSignup] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const [loading, setLoading] = useState(false);
	const [forgotPassword, setForgotPassword] = useState(false);

	const windowWidth = window.innerWidth;

	const handleSubmit = async () => {
		if (signup) {
			if (password != passwordConfirm) {
				alert({ message: "Passwords doesn't match", type: "error" });
			}
			else if (password.trim().length < 8) {
				alert({ message: "Passwords is too short", type: "error" });
			}
			else if (!name || name.trim().length <= 0) {
				alert({ message: "Please provide a Name", type: "error" });
			} else {
				const payload = {
					username: name.trim(),
					email,
					password,
					passwordConfirm,
				};

				try {
					setLoading(true);
					const res = await signupAuth(payload);
					if (res.data.message === "success") {
						alert({
							message: "Successfully Logged In",
							type: "success",
						});
						setLoading(false);
					}
					login(res.data.user, res.data.jwt);
					onClose(); 
				} catch (err) {
					setLoading(false);
					alert({
						message: err.response.data.error.message || err.message,
						type: "error",
					});

				}
			}
		} else {
			if (email.trim().length != 0 && password.trim().length != 0) {
				const payload = {
					identifier: email,
					password,
				};
				try {
					setLoading(true);
					const res = await loginAuth(payload);
					if (res.data.message === "success") {
						alert({
							message: "Successfully Logged In",
							type: "success",
						});
						setLoading(false);
					}
					login(res.data.user, res.data.jwt);
					onClose(); 
				} catch (err) {
					setLoading(false);
					alert({
						message: err.response.data.error.message || err.message,
						type: "error",
					});

				}
			}
			else {
				console.log('Invalid Email ot Password');
				alert({ message: 'Invalid Email or Password!', type: "error" });
			}
			
		}
	};
	return (
		<Dialog
			className={`form authform`}
			open={open}
			// keepMounted
			onClose={onClose}
			aria-describedby="basic form area"
			// TransitionComponent={Transition}
			sx={{
				borderRadius: "5px",
				padding: 0,
			}}
		>
			<div className="bg">
				<img src="/assets/vectors/vector-2.png" alt="" />
			</div>

			<DialogContent
				sx={{
					zIndex: 1,
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
				{windowWidth <= 480 && (
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
				)}
				<div className="content">
					<div className="title">
						{signup ? "Join Now!" : "Welcome Back!"}
					</div>
					<div className="form-group">
						{signup && (
							// <TextField
							// 	label={"Name*"}
							// 	fullWidth={true}
							// ></TextField>
							<MUITextfield
								label={"Name"}
								fullWidth={true}
								required={true}
								onInput={(e) => setName(e.target.value)}
							></MUITextfield>
						)}

						<MUITextfield
							label={"Email"}
							fullWidth={true}
							required={true}
							onInput={(e) => setEmail(e.target.value)}
						></MUITextfield>
						

						<MUITextfield
							label={"Password"}
							fullWidth={true}
							required={true}
							type="password"
							onInput={(e) => setPassword(e.target.value)}
						></MUITextfield>
						{signup && (
							<MUITextfield
								label={"Confirm Password"}
								fullWidth={true}
								required={true}
								type="password"
								onInput={(e) =>
									setPasswordConfirm(e.target.value)
								}
							></MUITextfield>
						)}

						<Button
							innerText={signup ? "Next" : "Login"}
							variant={"filled"}
							color={"green"}
							onClick={handleSubmit}
							loading={loading}
						></Button>
						{/* {!signup && <a className="link">Forgot Password?</a>} */}
						{!signup && (
							<a
								className="link"
								onClick={() => setForgotPassword(true)}
							>
								Forgot Password?
							</a>
						)}
						{!signup && (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									gap: "10px",
								}}
							>
								Don't have an account?{" "}
								<div
									className="link"
									onClick={() => setSignup(true)}
								>
									Signup
								</div>
							</div>
						)}
						{signup && (
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									gap: "10px",
								}}
							>
								Already have an account?{" "}
								<div
									className="link"
									onClick={() => setSignup(false)}
								>
									Login
								</div>{" "}
							</div>
						)}
					</div>
				</div>
				
			</DialogContent>
			<ForgotPassword
				open={forgotPassword}
				onClose={() => setForgotPassword(false)}
			></ForgotPassword>
		</Dialog>
	);
};

export default AuthForm;
