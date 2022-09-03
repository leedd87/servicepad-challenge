import React from "react";
import "../styles/footer.css";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import youtube from "../images/icon-youtube.svg";

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<a href="/" className="footer__logo">
						<img src={logo} alt="logo" />
					</a>

					<div className="footer__social">
						<a href="/">
							<img src={facebook} alt="facebook" />
						</a>
						<a href="/">
							<img src={youtube} alt="youtube" />
						</a>
						<a href="/">
							<img src={twitter} alt="twitter" />
						</a>
						<a href="/">
							<img src={pinterest} alt="pinterest" />
						</a>
						<a href="/">
							<img src={instagram} alt="instagram" />
						</a>
					</div>

					<div className="footer__links col1">
						<a href="/">About Us</a>
						<a href="/">Contact</a>
						<a href="/">Blog</a>
					</div>

					<div className="footer__links col2">
						<a href="/">Careers</a>
						<a href="/">Support</a>
						<a href="/">Privacy Policy</a>
					</div>

					<div className="footer__cta">
						<button className="invite-btn">Request Invite</button>
					</div>
					<div className="footer__copyright">
						© Easybank. All Rights Reserved
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
