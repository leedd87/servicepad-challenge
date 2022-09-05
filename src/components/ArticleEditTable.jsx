import React from "react";
import "../styles/articleEditTable.css";
import { Link as LinkRouter } from "react-router-dom";

const ArticleEditTable = ({ article }) => {
	console.log(article);

	return (
		<table className="article-table">
			<thead>
				<tr className="table-thead">
					<th>AUTHOR NAME</th>
					<th>TITLE</th>
					<th>CONTENT</th>
					<th>DATE</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{article &&
					article.map((element) => {
						return (
							<>
								<tr key={element.id}>
									<td className="tr-article">{element.author}</td>
									<td className="tr-article">{element.title}</td>
									<td className="tr-article">{element.content}</td>
									<td className="tr-article">
										{element.date.slice(0, 10).replaceAll("-", "/")}
									</td>
									<LinkRouter to={`/editarticle/${element.id}`}>
										<p className="tr-article-btn">Edit</p>
									</LinkRouter>
								</tr>
							</>
						);
					})}
			</tbody>
		</table>
	);
};

export default ArticleEditTable;
