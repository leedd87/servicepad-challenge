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
					<a href="/" className="nav-item">
						Home
					</a>
					<a href="/" className="nav-item">
						About
					</a>
					<a href="/" className="nav-item">
						Contact
					</a>
					<a href="/" className="nav-item">
						Blog
					</a>
					<a href="/" className="nav-item">
						Careers
					</a>
				</div>
				<button className="invite-btn">Request Invite</button>
			</nav>
		</>
	);
};

export default NavBar;
