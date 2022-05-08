import { Box, Stack } from "@mui/material";
import React from "react";
import Projects from "./Components/Projects";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills/Skills";
import Card from "./Components/Card/Card";

function App() {
	return (
		<Box>
			<Stack direction="column" spacing={2} alignItems="center">
				<NavBar />
				<Hero />
				<Skills />
				<Projects />
			</Stack>
		</Box>
	);
}

export default App;
