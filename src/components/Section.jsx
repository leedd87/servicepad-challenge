import React from "react";

const Section = () => {
	return (
		<div class="feature__content container container--pall">
			<div class="feature__intro">
				<h2>Why choose Easybank?</h2>
				<p>
					We leverage Open Banking to turn your bank account into your
					financial hub. Control your finances like never before.
				</p>
			</div>

			<div class="feature__grid">
				<div class="feature__item">
					<div class="feature__icon">
						<img src="images/icon-online.svg" alt="" />
					</div>
					<div class="feature__title">Online Banking</div>
					<div class="feature__description">
						Our modern web and mobile applications allow you to keep track
						of your finances wherever you are in the world.
					</div>
				</div>

				<div class="feature__item">
					<div class="feature__icon">
						<img src="images/icon-budgeting.svg" alt="" />
					</div>
					<div class="feature__title">Simple Budgeting</div>
					<div class="feature__description">
						See exactly where your money goes each month. Receive
						notifications when you’re close to hitting your limits.
					</div>
				</div>

				<div class="feature__item">
					<div class="feature__icon">
						<img src="images/icon-onboarding.svg" alt="" />
					</div>
					<div class="feature__title">Fast Onboarding</div>
					<div class="feature__description">
						We don't do branches. Open your account in minutes online and
						start taking control of your finances right away.
					</div>
				</div>

				<div class="feature__item">
					<div class="feature__icon">
						<img src="images/icon-api.svg" alt="" />
					</div>
					<div class="feature__title">Open API</div>
					<div class="feature__description">
						Manage your savings, investments, pension, and much more from
						one account. Tracking your money has never been easier.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
