import React from "react";

const CardLatestArticles = () => {
	return (
		<>
			<a href="/" class="article__item">
				<div
					class="article__image"
					//style="background-image: url('images/image-currency.jpg')"
				></div>
				<div class="article__text">
					<div class="article__author">By Claire Robinson</div>
					<div class="article__title">
						Receive money in any currency with no fees
					</div>
					<div class="article__description">
						The world is getting smaller and we're becoming more mobile.
						So why should you be forced to only receive money in a single
						…
					</div>
				</div>
			</a>
		</>
	);
};

export default CardLatestArticles;
