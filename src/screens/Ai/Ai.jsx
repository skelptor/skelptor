import React, { useState, useEffect } from 'react';
import "./Ai.css";
import Button from '../../components/atoms/Button/Button';
import { createWaitlist } from "../../services/api";
import { alert } from "../../components/molecules/CustomAlert/alert";
const Ai = () => {

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
			
			alert({
				message: "You have successfully joined our Waitlist.",
				type: "success",
			});
		} catch (err) {
			alert({
				message: err.response.data.error.message,
				type: "error",
			});
			console.log(err);
		}
	};

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
						onClick={e => handleSubmit(e.target.value)}
					></Button>
				</div>
			</section>
		</div>
	);
}
 
export default Ai;