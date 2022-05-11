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
		<Container>
			<div id="Skills" class=" w-auto h-auto inline-block">
				<div>
					<Stack
						direction="column"
						spacing={0}
						alignItems="center"
						divider={<Divider orientation="horizontal" flexItem />}
						sx={{
							paddingTop: 0,
							display: "flex",
							flexWrap: "wrap",
							paddingBottom: 10,
						}}
					>
						<h1 class="text-3xl sm:text-3xl lg:text-5xl border-b-2 mx-10">
							Skills
						</h1>
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
									<Typography variant="h4">{category}</Typography>
									<Card items={skill_list[category]} />
								</Stack>
							))}
						</Box>
					</Stack>
				</div>
			</div>
		</Container>
	);
};

export default Skills;
