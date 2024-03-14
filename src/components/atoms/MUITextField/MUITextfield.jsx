import React from "react";
import { TextField } from "@mui/material";

const MUITextfield = ({
	label,
	onInput,
	InputProps,
	fullWidth,
	type,
	helperText,
	error,
	value,
	required,
	length
}) => {
	return (
		<TextField
			id="outlined-basic"
			label={label}
			onInput={onInput}
			variant="outlined"
			fullWidth={fullWidth}
			value={value}
			InputProps={InputProps}
			type={type}
			helperText={helperText}
			error={error}
			required={required}
			sx={{
				mt: "0px",
				mr: "10px",
				color: "black !important",
				"& .MuiOutlinedInput-root": {
					"& fieldset": {
						borderColor: "rgb(150, 150, 150)",
						color: "black",
						height: "60px",
					},
					"&:hover fieldset": {
						borderColor: "var(--green)",
					},
					"&:focus fieldset": {
						borderColor: "var(--green)",
					},
				},
				"& .MuiInputLabel-root": {
					color: "rgb(0, 0, 0)",
				},
				"& .MuiOutlinedInput-input": {
					color: "black",
					bgcolor: "var(--bg)",
					border: "0px solid red",
					height: "100%",
				},
			}}
		/>
	);
};

export default MUITextfield;
