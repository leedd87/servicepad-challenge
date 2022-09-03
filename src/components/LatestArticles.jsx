import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/latestArticle.css";
//import CardLatestArticles from "./CardLatestArticles";
import currency from "../images/image-currency.jpg";
import confetti from "../images/image-confetti.jpg";
import plane from "../images/image-plane.jpg";
import restaurant from "../images/image-restaurant.jpg";

const LatestArticles = () => {
	const [articles, setArticles] = useState();

	useEffect(() => {
		axios
			.get("https://servicepad-post-api.herokuapp.com/articles/")
			.then((res) => {
				setArticles(res.data.data);
			});
	}, []);

	//console.log(articles);

	let articlesSortById = articles?.sort(function (a, b) {
		return b.id - a.id;
	});

	console.log(articlesSortById);

	return (
		<div className="">
			<h2>Latest Articles</h2>
			<div className="article-container">
				{/* {articlesSortById &&
					articlesSortById.map((article) => (
						<CardLatestArticles article={article} />
					))} */}

				<a href="/" className="article-item">
					<div>
						<img src={currency} alt="" />
					</div>
					<div className="article__text">
						<span>By Claire Robinson</span>

						<h5>Receive money in any currency with no fees</h5>

						<p>
							The world is getting smaller and we're becoming more
							mobile. So why should you be forced to only receive money
							in a single …
						</p>
					</div>
				</a>
				<a href="/" className="article-item">
					<div>
						<img src={restaurant} alt="" />
					</div>
					<div className="article__text">
						<span>By Wilson Hutton</span>
						<h5>Treat yourself without worrying about money</h5>
						<p>
							Our simple budgeting feature allows you to separate out
							your spending and set realistic limits each month. That
							means you …
						</p>
					</div>
				</a>
				<a href="/" className="article-item">
					<div>
						<img src={plane} alt="" />
					</div>
					<div className="article__text">
						<span>By Wilson Hutton</span>

						<h5>Take your Easybank card wherever you go</h5>

						<p>
							We want you to enjoy your travels. This is why we don't
							charge any fees on purchases while you're abroad. We'll
							even show you …
						</p>
					</div>
				</a>
				<a href="/" className="article-item">
					<div>
						<img src={confetti} alt="" />
					</div>
					<div className="article__text">
						<span>By Claire Robinson</span>
						<h5>Our invite-only Beta accounts are now live!</h5>
						<p>
							After a lot of hard work by the whole team, we're excited
							to launch our closed beta. It's easy to request an invite
							through the site ...
						</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default LatestArticles;
