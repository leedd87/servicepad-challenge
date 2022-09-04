import axios from "axios";
import React from "react";
import { useState } from "react";

const AddNewArticlesPage = () => {
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");
	const [id, setId] = useState("");
	const [modifyAuthor, setModifyAuthor] = useState("");
	const [modifyContent, setModifyContent] = useState("");
	const [modifyTitle, setModifyTitle] = useState("");
	const [deleteId, setDeleteId] = useState("");

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

	/*MODIFY ARTICLE */
	const modifyArticle = (e) => {
		e.preventDefault();

		const modifyArticle = {
			author: e.target[1].value,
			content: e.target[2].value,
			title: e.target[3].value,
		};

		axios
			.put(
				`https://servicepad-post-api.herokuapp.com/articles/${e.target[0].value}`,
				modifyArticle
			)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		setId("");
		setModifyAuthor("");
		setModifyContent("");
		setModifyTitle("");
	};

	/*DELETE ARTICLE */
	const deleteArticle = (e) => {
		e.preventDefault();

		axios
			.delete(
				`https://servicepad-post-api.herokuapp.com/articles/${e.target[0].value}`
			)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));

		setDeleteId("");
	};

	return (
		<>
			<form
				className="d-flex flex-column container form-new-article"
				onSubmit={addArticle}
			>
				<h4>Add new Article</h4>
				<input
					placeholder="author"
					type="text"
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				/>
				<input
					placeholder="content"
					type="text"
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>
				<input
					placeholder="title"
					type="text"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<button type="submit" className="mb-3">
					Submit
				</button>
			</form>

			<form
				className="d-flex flex-column container form-new-article"
				onSubmit={modifyArticle}
			>
				<h4>Modify Article</h4>
				<input
					placeholder="id"
					type="text"
					value={id}
					onChange={(e) => {
						setId(e.target.value);
					}}
				/>
				<input
					placeholder="author"
					type="text"
					value={modifyAuthor}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				/>
				<input
					placeholder="content"
					type="text"
					value={modifyContent}
					onChange={(e) => {
						setModifyContent(e.target.value);
					}}
				/>
				<input
					placeholder="title"
					type="text"
					value={modifyTitle}
					onChange={(e) => {
						setModifyTitle(e.target.value);
					}}
				/>
				<button type="submit" className="mb-3">
					Modify
				</button>
			</form>

			<form
				className="d-flex flex-column container form-new-article"
				onSubmit={deleteArticle}
			>
				<h4>Delete Article</h4>
				<input
					placeholder="id"
					type="text"
					value={deleteId}
					onChange={(e) => {
						setDeleteId(e.target.value);
					}}
				/>
				<button type="submit" className="mb-3">
					Delete
				</button>
			</form>
		</>
	);
};

export default AddNewArticlesPage;
