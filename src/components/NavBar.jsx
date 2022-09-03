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
					{/* <ul>
						<li> */}
					<a href="/" className="nav-item">
						Home
					</a>
					{/* </li>
						<li> */}
					<a href="/" className="nav-item">
						About
					</a>
					{/* </li>
						<li> */}
					<a href="/" className="nav-item">
						Contact
					</a>
					{/* </li>
						<li> */}
					<a href="/" className="nav-item">
						Blog
					</a>
					{/* </li>
						<li> */}
					<a href="/" className="nav-item">
						Careers
					</a>
					{/* </li>
					</ul> */}
				</div>
				<button className="invite-btn">Request Invite</button>
			</nav>
		</>
	);
};

export default NavBar;
