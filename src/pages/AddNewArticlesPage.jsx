import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ArticleEditTable from "../components/ArticleEditTable";
import ArticleForm from "../components/ArticleForm";
import "../styles/addNewArticlePage.css";

const AddNewArticlesPage = () => {
	// const [id, setId] = useState("");
	// const [modifyAuthor, setModifyAuthor] = useState("");
	// const [modifyContent, setModifyContent] = useState("");
	// const [modifyTitle, setModifyTitle] = useState("");

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
			return a.id - b.id;
		})
		.splice(0, 6);

	console.log(articlesSortById);

	return (
		<div className="new-article-container">
			<div className="article-text-container">
				<h4 className="new-article-text new-article-text-one">
					Add New Blog Article
				</h4>
				<p className="new-article-p">
					Publish a new blog article to feature in the Easybank homepage
				</p>
			</div>
			<ArticleForm />
			<div className="article-text-container">
				<h4 className="new-article-text">Previous Articles</h4>
				<p className="new-article-p">
					Review and edit previous blog posts published on to the homepage.
				</p>
			</div>
			<ArticleEditTable article={articlesSortById} />
		</div>
	);
};

export default AddNewArticlesPage;
