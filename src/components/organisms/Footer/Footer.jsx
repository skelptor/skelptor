import Button from '../../atoms/Button/Button';
import ComingSoonDialog from '../ComingSoonDialog/ComingSoonDialog';
import './Footer.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
const Footer = () => {
	const [openComingSoon, setOpenComingSoon] = useState();

	return (
		<div className="footer">
			{/* <div className="left-col">
				</div>
			<div className="right-col">
				
			</div> */}
			<div className="bottom">
				<div className="left-col">
					<div className="cc">
						Copyright © Skelptor All Right Reserved 2023
					</div>
					{/* <br /> */}
					<div className="credits">
						
						<a href="https://lightstudio.dev" className="item">
							Developed by lightstudio.dev
						</a>
					</div>
				</div>
				{/* <div className="right-col">
					<a href="https://instagram.com/goodtimesvacation?igshid=OGQ5ZDc2ODk2ZA==">
						<i className="fa-brands fa-facebook"></i>
					</a>
					<a href="https://www.facebook.com/profile.php?id=61550711803217&mibextid=ZbWKwL">
						<i className="fa-brands fa-instagram"></i>
					</a>
				</div> */}
			</div>
		</div>
	);
}
 
export default Footer;