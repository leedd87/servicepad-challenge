import React from "react";
import logo from "../images/logo.svg";
import "../styles/navBar.css";

const NavBar = () => {
	return (
		<>
			<nav className="navBar">
				<a href="/">
					<img src={logo} alt="Easybank" />
				</a>
				<div className="navigation">
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Blog</a>
					<a href="/">Careers</a>
				</div>
				<a href="/">Request Invite</a>
				{/* <button>Request Invite</button> */}
			</nav>
		</>
	);
};

export default NavBar;
