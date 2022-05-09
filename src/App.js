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
		<Box bgcolor="gray">
			<div>
				<NavBar />
				<Box sx={{ height: "100vh", alignItems: "center", display: "flex" }}>
					<Hero />
				</Box>
				<Box sx={{ height: "100vh", alignItems: "center", display: "flex" }}>
					<Skills />{" "}
				</Box>
				<Box sx={{ height: "100vh", alignItems: "center", display: "flex" }}>
					<Projects />{" "}
				</Box>

				<Footer />
			</div>
		</Box>
	);
}

export default App;
