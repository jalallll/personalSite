import { Box, Stack } from "@mui/material";
import React from "react";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer";
import Nav_bar from "./Components/Nav_bar";
import Header from "./Components/Header";
function App() {
	return (
		<div>
			<Nav_bar />
			<div class="bg-black h-auto">
				<Header />
				<Skills />
				<Projects />
			</div>
		</div>
	);
}

export default App;
