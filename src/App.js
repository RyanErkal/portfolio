import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
	return (
		<>
			<Nav />
			<Header />
			<Portfolio />
			<Footer />
		</>
	);
}

export default App;
