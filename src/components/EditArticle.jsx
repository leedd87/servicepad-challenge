import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditArticle = () => {
	const [modifyAuthor, setModifyAuthor] = useState("");
	const [modifyContent, setModifyContent] = useState("");
	const [modifyTitle, setModifyTitle] = useState("");
	const { id } = useParams();

	console.log(id);

	/*MODIFY ARTICLE */
	const modifyArticle = (e) => {
		e.preventDefault();

		const modifyArticle = {
			author: e.target[0].value,
			content: e.target[1].value,
			title: e.target[2].value,
		};

		axios
			.put(
				`https://servicepad-post-api.herokuapp.com/articles/${id}`, //cambiar por article.id
				modifyArticle
			)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		// setId("");
		setModifyAuthor("");
		setModifyContent("");
		setModifyTitle("");
	};
	return (
		<>
			<form
				className="d-flex flex-column container form-new-article w-75"
				onSubmit={modifyArticle}
			>
				<input
					placeholder="Author"
					type="text"
					value={modifyAuthor}
					onChange={(e) => {
						setModifyAuthor(e.target.value);
					}}
				/>
				<input
					placeholder="Content"
					type="text"
					value={modifyContent}
					onChange={(e) => {
						setModifyContent(e.target.value);
					}}
				/>
				<input
					placeholder="Title"
					type="text"
					value={modifyTitle}
					onChange={(e) => {
						setModifyTitle(e.target.value);
					}}
				/>
				<button type="submit" className="mb-3 new-article-btn">
					Edit
				</button>
			</form>
		</>
	);
};

export default EditArticle;
