import React from "react";
import axios from "axios";
import { useState } from "react";

const ArticleForm = () => {
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");
	/*ADD NEW ARTICLE*/
	const addArticle = (e) => {
		e.preventDefault();

		const newArticle = {
			author: e.target[0].value,
			content: e.target[1].value,
			title: e.target[2].value,
		};

		axios
			.post(
				"https://servicepad-post-api.herokuapp.com/articles/",
				newArticle
			)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});

		console.log("Add new article");

		setAuthor("");
		setContent("");
		setTitle("");
	};
	return (
		<div>
			<form
				className="d-flex flex-column container form-new-article w-50"
				onSubmit={addArticle}
			>
				<label>
					Author
					<input
						type="text"
						value={author}
						onChange={(e) => {
							setAuthor(e.target.value);
						}}
					/>
				</label>
				<label>
					Blog Title
					<input
						type="text"
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
					/>
				</label>
				<label>
					Blog Content
					<textarea
						cols="30"
						rows="10"
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</label>
				<button type="submit" className="new-article-btn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default ArticleForm;
