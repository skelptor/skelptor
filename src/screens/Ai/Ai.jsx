import React, { useState, useEffect } from 'react';
import "./Ai.css";
import Button from '../../components/atoms/Button/Button';

const Ai = () => {
	return (
		<div className="ai">
			<section className="section-1">
				<div className="heading">Comming Soon!</div>
				<div className="sub-heading">
					Thanks for your patience!
					<br />
					Our team is working round the
					clock to bring our best services to you
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
			</section>
		</div>
	);
}
 
export default Ai;