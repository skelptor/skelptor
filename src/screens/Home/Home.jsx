import React, { useState, useEffect } from "react";
import "./Home.css";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import Button from "../../components/atoms/Button/Button";
import { createSubscriber } from "../../services/api";
import { alert } from "../../components/molecules/CustomAlert/alert";

const Home = () => {

	const faqs = [
		{
			question: "Lorem ipsum dolor sit amet consectetur",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam beatae incidunt suscipit aut amet totam inventore commodi doloremque enim, ut quis, nesciunt dignissimos deleniti iusto labore nihil repellat molestiae.",
		},

		{
			question: "Lorem ipsum dolor sit amet consectetur",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam beatae incidunt suscipit aut amet totam inventore commodi doloremque enim, ut quis, nesciunt dignissimos deleniti iusto labore nihil repellat molestiae.",
		},
		{
			question: "Lorem ipsum dolor sit amet consectetur",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam beatae incidunt suscipit aut amet totam inventore commodi doloremque enim, ut quis, nesciunt dignissimos deleniti iusto labore nihil repellat molestiae.",
		},
		{
			question: "Lorem ipsum dolor sit amet consectetur",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam beatae incidunt suscipit aut amet totam inventore commodi doloremque enim, ut quis, nesciunt dignissimos deleniti iusto labore nihil repellat molestiae.",
		},
		{
			question: "Lorem ipsum dolor sit amet consectetur",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam beatae incidunt suscipit aut amet totam inventore commodi doloremque enim, ut quis, nesciunt dignissimos deleniti iusto labore nihil repellat molestiae.",
		},
		{
			question: "Lorem ipsum dolor sit amet consectetur",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam beatae incidunt suscipit aut amet totam inventore commodi doloremque enim, ut quis, nesciunt dignissimos deleniti iusto labore nihil repellat molestiae.",
		},
	];

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

	const { innerWidth: width, innerHeight: height } = window;

	const [email, setEmail] = useState();

	const handleSubmit = async () => {
		const payload = { data: { email } };
		try {
			const res = await createSubscriber(payload);
			
			alert({
				message: "Than you for subscribing with us.",
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
		<div className="home">
			<section className="section-1">
				<div className="left-col">
					<div className="content">
						<h1>
							Discover and compare aesthetic procedure with
							skep.ai
						</h1>
						<h3>
							Skelptor helps you find the right cosmetic procedure
						</h3>
						<div className="row">
							<Button
								color="green"
								innerText={"Skelp.ai"}
								variant={"filled"}
								size={"large"}
							></Button>
							<Button
								color="black"
								size={"large"}
								innerText={"Resources"}
								variant={"text"}
							></Button>
						</div>
					</div>
				</div>
				<div className="right-col">
					<div className="img">
						{width > 480 && (
							<img src="./assets/imgs/home1-2.png" alt="" />
						)}
						{width <= 480 && (
							<img src="./assets/imgs/home1-3.png" alt="" />
						)}
					</div>
				</div>
			</section>
			<section className="section-2">
				<div className="heading">What to expect?</div>
				<div className="content">
					<div className="item">
						<div className="num">01</div>
						<div className="text">
							Get answers to all your questions on any cosmetic
							procedure
						</div>
					</div>
					<div className="item">
						<div className="num">02</div>
						<div className="text">
							Find the right procedure for you
						</div>
					</div>
					<div className="item">
						<div className="num">03</div>
						<div className="text">Compare doctors near you</div>
					</div>
					<div className="item">
						<div className="num">04</div>
						<div className="text">Book and visit</div>
					</div>
				</div>
			</section>
			<section className="section-3">
				<div className="left-col">
					<div className="content">
						<h1>How We Help?</h1>
						<h3>
							Find the right procedure for your need. Leave the
							hassle and admin to us
						</h3>

						<div className="part">
							<h4 className="bold">For Customers:</h4>
							<h4>
								Identify the right procedure for you. <br />
								Get all your questions answered. <br />
								Compare practitioners and book
							</h4>
						</div>

						<div className="part">
							<h4 className="bold">For Partners:</h4>
							<h4>
								Be live 24*7 <br />
								Engage in after care <br />
								Launch new procedures
							</h4>
						</div>

						<div className="row">
							<Button
								color="green"
								innerText={"Join Waitlist"}
								variant={"filled"}
								size={"large"}
							></Button>
						</div>
					</div>
				</div>
				{width > 720 && (
					<div className="right-col">
						<div className="img">
							<img src="./assets/imgs/home2.png" alt="" />
						</div>
					</div>
				)}
			</section>
			<section className="section-4">
				<div className="heading">Frequently Asked Questions</div>
				<div className="content">
					{faqs.map((faq, i) => (
						<Accordion
							key={i}
							className="accordian"
							sx={{
								background: "none",
								color: "white",
								border: "1px solid rgba(200, 200, 200, 5)",
								borderRadius: "0px",
								margin: "10px 0",
								width: {
									xs: "95%",
									md: "70%",
									xl: "45%",
								},
								p: "20px 10px",
							}}
						>
							<AccordionSummary
								expandIcon={
									<>
										<div className="circle">
											<span
												className="material-icons"
												style={{
													color: "white",
												}}
											>
												add
											</span>
										</div>
									</>
								}
								aria-controls="panel1a-content"
								id="panel1a-header"
								sx={{
									color: "white",
									fontSize: "20px",
								}}
							>
								{faq.question}
							</AccordionSummary>
							<AccordionDetails
								sx={{
									fontSize: "15px",
									lineHeight: "25px",
								}}
							>
								{faq.answer}
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</section>
			<section className="section-5">
				<div className="heading">Browse our blogs by Categories</div>
				<div className="content">
					{categories.map((item) => (
						<div className="item" key="item.name">
							<div className="img">
								<img src={"./assets/imgs/" + item.img} alt="" />
							</div>
							{item.name}
						</div>
					))}
				</div>
			</section>
			<section className="section-6">
				<div className="content">
					<div className="left-col">
						<h1>Subscribe for the latest updates</h1>
						<div className="input">
							<input
								type="email"
								placeholder="Enter your email to subscribe"
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
					</div>
					{ (
						<div className="right-col">
							<div className="img">
								<img src="./assets/imgs/home3.png" alt="" />
							</div>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Home;
