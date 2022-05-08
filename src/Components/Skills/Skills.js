import { Divider, Stack, Typography, Box } from "@mui/material";
import React from "react";
import Card from "../Card/Card";
const languages = [
	"Python",
	"C",
	"C++",
	"Java",
	"JavaScript",
	"C#",
	"PHP",
	"SQL",
	"MySQL",
	"HTML",
	"CSS",
	"SASS",
	"Assembly",
	"Flutter",
];
const frameworks = [
	"React",
	"Node JS",
	"Express",
	"Axis",
	"PyTorch",
	"TensorFlow",
	"Sklearn",
	"Hadoop",
	"Django",
	"Redux",
];
const tools = [
	"MongoDB",
	"Docker",
	"Postman",
	"Linux",
	"Git",
	"Elastic Search",
	"LaTeX",
];

const skill_list = {
	Languages: languages,
	Frameworks: frameworks,
	Tools: tools,
};

const Skills = () => {
	return (
		<Box
			sx={{
				marginY: 10,
				display: "flex",

				gap: 5,
				flexDirection: { xs: "column", md: "row" },
			}}
		>
			{Object.keys(skill_list).map((category) => (
				<Stack
					direction="column"
					spacing={2}
					sx={{ alignItems: "center" }}
					flex={1}
				>
					<Typography variant="h3">{category}</Typography>
					<Card items={skill_list[category]} />
				</Stack>
			))}
		</Box>
	);
};

export default Skills;
