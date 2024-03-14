import React, { useState, useEffect } from 'react';
import './TextField.css';

const TextField = ({label, onInput, fullWidth, value, startIcon, placeholder, type, endIcon, onEnter}) => {
	return (
		<label
			htmlFor=""
			className={`textfield-container ${fullWidth && "fullWidth"}`}
		>
			{label}
			<div className="textfield">
				{startIcon && <div className="start-icon">{startIcon}</div>}
				<input
					onKeyDown={e => e.key == 'Enter' && onEnter()}
					type={type || "text"}
					onInput={onInput}
					value={value}
					placeholder={placeholder}
				/>
				{endIcon && <div className="end-icon">{endIcon}</div>}
			</div>
		</label>
	);
}
 
export default TextField;