import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import TypeAnimation from "react-type-animation";

const Hero = () => {
	return (
		<Container>
			<Stack
				direction="column"
				spacing={2}
				alignItems="center"
				sx={{ paddingY: 10 }}
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
		</Container>
	);
};

export default Hero;
