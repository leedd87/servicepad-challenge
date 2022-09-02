import React from "react";
import logo from "../images/logo.svg";

const NavBar = () => {
	return (
		<>
			<nav>
				<a href="/">
					<img src={logo} alt="Easybank" />
				</a>
				<div>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Blog</a>
					<a href="/">Careers</a>
				</div>
				<a href="/">Request Invite</a>
			</nav>
		</>
	);
};

export default NavBar;
