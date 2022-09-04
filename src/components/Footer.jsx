import React from "react";
import "../styles/footer.css";
import darklogo from "../images/logo-dark.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import youtube from "../images/icon-youtube.svg";

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="footer-container-links">
					<div className="first-col">
						<a href="/" className="footer-logo">
							<img src={darklogo} alt="logo" />
						</a>

						<div className="footer-social-links">
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
					</div>

					<div className="sec-col">
						<a href="/">About Us</a>
						<a href="/">Contact</a>
						<a href="/">Blog</a>
					</div>

					<div className="third-col">
						<a href="/">Careers</a>
						<a href="/">Support</a>
						<a href="/">Privacy Policy</a>
					</div>
				</div>

				<div className="footer-request-btn">
					<button className="invite-btn">Request Invite</button>
					<div className="footer-copyright">
						© Easybank. All Rights Reserved
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
