/* eslint-disable no-unused-vars */
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
