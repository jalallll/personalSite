import { Box, Stack } from "@mui/material";
import React from "react";
import Projects from "./Components/Projects";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer";

function App() {
	return (
		<Box>
			<Stack direction="column" spacing={2} alignItems="center">
				<NavBar />
				<Hero />
				<Skills />
				<Projects />
				<Footer />
			</Stack>
		</Box>
	);
}

export default App;
