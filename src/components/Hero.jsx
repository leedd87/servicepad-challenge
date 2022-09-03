import React from "react";
import phones from "../images/image-mockups.png";

const Hero = () => {
	return (
		<div>
			<div>
				<h1>Next generation digital banking</h1>
				<p>
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing, and
					much more.
				</p>
				<a href="/">Request Invite</a>
				{/* <button>Request Invite</button> */}
			</div>
			<div>
				<img src={phones} alt="phones" />
			</div>
		</div>
	);
};

export default Hero;
