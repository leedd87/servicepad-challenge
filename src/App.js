import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddNewArticlesPage from "./pages/AddNewArticlesPage";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/addarticle" element={<AddNewArticlesPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
