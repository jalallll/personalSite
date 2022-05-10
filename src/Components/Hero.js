import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TypeAnimation from "react-type-animation";
import monkey from "../assets/monkey.gif";
const Hero = () => {
	return (
		<Container>
			<Box sx={{ display: "flex", flexWrap: "wrap", margin: 5 }}>
				<Stack
					direction="column"
					spacing={2}
					alignItems="center"
					sx={{ paddingY: 10, display: "flex", flexWrap: "wrap" }}
				>
					<Typography variant="h1">Hey, I'm Jalal.</Typography>
					<Typography variant="h2">I am passionate about</Typography>

					<TypeAnimation
						cursor={true}
						sequence={[
							"Frontend Development",
							1000,
							"Backend Development",
							1000,
							"Machine Learning",
							1000,
							"Game Design",
							1000,
						]}
						wrapper="h1"
						repeat={Infinity}
					/>
				</Stack>
				<Box sx={{ maxHeight: 5, maxWidth: 5 }}>
					{window.innerWidth > 1200 && <img src={monkey} />}
				</Box>
			</Box>
		</Container>
	);
};

export default Hero;
