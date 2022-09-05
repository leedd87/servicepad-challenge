import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/latestArticle.css";
import CardLatestArticles from "./CardLatestArticles";
import { Link as LinkRouter } from "react-router-dom";

const LatestArticles = () => {
	const [articles, setArticles] = useState();

	useEffect(() => {
		axios
			.get("https://servicepad-post-api.herokuapp.com/articles/")
			.then((res) => {
				setArticles(res.data.data);
			});
	}, []);

	let articlesSortById = articles
		?.sort(function (a, b) {
			return b.id - a.id;
		})
		.slice(0, 4);

	console.log(articlesSortById);

	return (
		<div className="latest-articles-container">
			<div className="latest-text-container">
				<h2>Latest Articles</h2>
				<LinkRouter to="/addarticle">
					<button className="add-new-article">+Add New Article</button>
				</LinkRouter>
			</div>
			<div className="article-container">
				{articlesSortById &&
					articlesSortById.map((article) => (
						<div key={article.id} className="article-card">
							<CardLatestArticles article={article} />
						</div>
					))}
			</div>
		</div>
	);
};

export default LatestArticles;
