import { Divider, Stack, Typography, Box, Container } from "@mui/material";
import React from "react";
import Card from "./Card/Card";
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
	"Axios",
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
		<div class="w-screen h-screen">
			<Container>
				<Stack
					direction="column"
					spacing={0}
					alignItems="center"
					divider={<Divider orientation="horizontal" flexItem />}
					sx={{ paddingTop: 0, display: "flex", flexWrap: "wrap" }}
				>
					<Typography variant="h3">Skills</Typography>
					<Box
						sx={{
							marginY: 0,
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
								<Typography variant="h4">{category}</Typography>
								<Card items={skill_list[category]} />
							</Stack>
						))}
					</Box>
				</Stack>
			</Container>
		</div>
	);
};

export default Skills;
