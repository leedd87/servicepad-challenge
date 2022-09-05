import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddNewArticlesPage from "./pages/AddNewArticlesPage";
import LatestArticles from "./components/LatestArticles";
import EditArticle from "./components/EditArticle";

function App() {
	return (
		<div className="App">
			<NavBar />

			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/addarticle" element={<AddNewArticlesPage />} />
				<Route path="/editarticle/:id" element={<EditArticle />} />
			</Routes>
			<LatestArticles />
			<Footer />
		</div>
	);
}

export default App;
