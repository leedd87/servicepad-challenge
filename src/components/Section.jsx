import React from "react";
import iconOnline from "../images/icon-online.svg";
import iconBudgeting from "../images/icon-budgeting.svg";
import iconOnboarding from "../images/icon-onboarding.svg";
import iconApi from "../images/icon-api.svg";
import "../styles/section.css";

const Section = () => {
	return (
		<div className="section">
			<div className="section-text">
				<h2>Why choose Easybank?</h2>
				<p>
					We leverage Open Banking to turn your bank account into your
					financial hub. Control your finances like never before.
				</p>
			</div>

			<div className="section-list">
				<div className="feature__icon">
					<img src={iconOnline} alt="icon-online" />
					<h2>Online Banking</h2>
					<p>
						Our modern web and mobile applications allow you to keep track
						of your finances wherever you are in the world.
					</p>
				</div>
				<div className="feature__icon">
					<img src={iconBudgeting} alt="" />
					<h2>Simple Budgeting</h2>
					<p>
						See exactly where your money goes each month. Receive
						notifications when you're close to hitting your limits.
					</p>
				</div>

				<div className="feature__icon">
					<img src={iconOnboarding} alt="" />

					<h2>Fast Onboarding</h2>
					<p>
						We don't do branches. Open your account in minutes online and
						start taking control of your finances right away.
					</p>
				</div>
				<div className="feature__icon">
					<img src={iconApi} alt="" />
					<h2>Open API</h2>
					<p>
						Manage your savings, investments, pension, and much more from
						one account. Tracking your money has never been easier.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Section;
