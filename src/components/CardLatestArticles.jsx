import React from "react";

const CardLatestArticles = ({ article }) => {
	console.log(article);

	return (
		<>
			<div className="article-img-container">
				<img src={article.image_url} alt="" />
			</div>
			<div className="article-text">
				<span>{article.author}</span>
				<h5>{article.title}</h5>

				<p>{article.content}</p>
			</div>
		</>
	);
};

export default CardLatestArticles;
