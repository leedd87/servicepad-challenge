import React from "react";
import phones from "../images/image-mockups.png";
import "../styles/hero.css";

const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="hero-text">
					<h1>Next generation digital banking</h1>
					<p>
						Take your financial life online. Your Easybank account will be
						a one-stop-shop for spending, saving, budgeting, investing,
						and much more.
					</p>
					{/* <a href="/">Request Invite</a> */}
					<button className="invite-btn">Request Invite</button>
				</div>
				<div className="hero-background-img">
					<img src={phones} alt="phones" className="phones" />
				</div>
			</div>
		</>
	);
};

export default Hero;
