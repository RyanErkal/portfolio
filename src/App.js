import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<Nav />
			<Header />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
