import {
	Box,
	Card,
	CardHeader,
	CardContent,
	CardMedia,
	Typography,
	CardActions,
	Stack,
	Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const projects = [
	{
		title: "Chat Application",
		tools: "Python Sockets",
		description:
			"A server and client chat application made in python using sockets.",
		image: require("../assets/socket.jpg"),
	},
	{
		title: "RDT 3.0 Chat App",
		tools: "Python Sockets",
		description:
			"A server and client chat application made in python using UDP sockets.",
		image: require("../assets/socket.jpg"),
	},
	{
		title: "RDT 3.0 Chat App",
		tools: "Python Sockets",
		description:
			"A server and client chat application made in python using UDP sockets.",
		image: require("../assets/socket.jpg"),
	},
];

const CustomCard = (props) => {
	return (
		<Card sx={{ maxWidth: 300 }} flex={1}>
			<CardHeader title={props.project.title} subheader={props.tools} />
			<CardMedia
				component="img"
				height="150"
				image={props.project.image}
				alt="Image"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{props.project.description}
				</Typography>
			</CardContent>
			<CardActions>
				<GitHubIcon />
			</CardActions>
		</Card>
	);
};

const Projects = () => {
	return (
		<Stack
			direction="column"
			spacing={5}
			alignItems="center"
			divider={<Divider orientation="horizontal" flexItem />}
			sx={{ paddingTop: 10 }}
		>
			<Typography variant="h3">Projects</Typography>
			<Box
				sx={{
					marginY: 10,
					display: "flex",

					gap: 5,
					flexDirection: { xs: "column", md: "row" },
				}}
			>
				{projects.map((project) => (
					<CustomCard project={project} />
				))}
			</Box>
		</Stack>
	);
};

export default Projects;
