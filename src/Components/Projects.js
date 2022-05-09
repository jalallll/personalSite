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
	Container,
	IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const projects = [
	{
		title: "Deep Learning CNN",
		tools: "Python, PyTorch, SKLearn, Matplotlib",
		description:
			"Used transfer learning to train and test neural network model on a dataset of 60,000 images. Performed feature extraction on fc6 and fc7 convolutional layers to train support vector machines, and achieved an accuracy score of 80% on 10,000 test images.",
		image: require("../assets/pytorch.png"),
		link: "https://github.com/jalallll/projects_ai/blob/master/NN%20-%20feature%20extraction/AN.ipynb",
	},
	{
		title: "Distributed Data Processing",
		tools: "Python, Apache Hadoop HDFS",
		description:
			"Utilized distributed computing through Hadoop Distributed File System (HDFS) to determine the importance of each word in a corpus, by calculation of the TF-IDF metric.			",
		image: require("../assets/hadoop.png"),
		link: "https://github.com/jalallll/mr_hadoop",
	},
	{
		title: "Chat Application",
		tools: "Python Sockets",
		description:
			"A server and client chat application made in python using sockets.",
		image: require("../assets/socket.jpg"),
		link: "https://github.com/jalallll/PyChat",
	},
	{
		title: "Reliable Data Transport Implementation",
		tools: "Python Sockets",
		description:
			"Used UDP sockets to implement Reliable Data Transfer (RDT) 3.0 protocol to develop a client-server application to allow multi-client messaging.",
		image: require("../assets/socket.jpg"),
		link: "https://github.com/jalallll/UDP_Chat",
	},
	{
		title: "Bus Trip Booking System",
		tools: "PHP, MySQL, HTML, Bootstrap",
		description:
			"Developed a CRUD based web application using SQL and PHP that allows users to view available bus trips, view passengers on a specific bus trip, and book/cancel a bus trip. Utilized SQL transactions to ensure logical order of data modifications.",
		image: require("../assets/sql.jpg"),
		link: "https://github.com/jalallll/BusTripWebsite",
	},
	{
		title: "Social Network",
		tools: "Python, Django, SQLite, Pillow",
		description:
			"Developed a Facebook clone that allows users to login to their account and make a post on their profile.",
		image: require("../assets/social_media.jpg"),
		link: "https://github.com/jalallll/WhiteHare",
	},
];

const CustomCard = (props) => {
	return (
		<Card sx={{ minWidth: 300, maxWidth: 300, margin: 4 }}>
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
				<IconButton>
					<GitHubIcon onClick={() => window.open(props.project.link)} />
				</IconButton>
			</CardActions>
		</Card>
	);
};

const Projects = () => {
	return (
		<Container>
			<Stack
				direction="column"
				spacing={5}
				alignItems="center"
				divider={<Divider orientation="horizontal" flexItem />}
				sx={{ paddingTop: 10, justifyContent: "center" }}
			>
				<Typography variant="h3">Projects</Typography>
				<Container>
					<Stack
						direction="row"
						spacing={0}
						alignItems="start"
						divider={<Divider orientation="horizontal" flexItem />}
						sx={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
						}}
					>
						{projects.map((project) => (
							<CustomCard project={project} />
						))}
					</Stack>
				</Container>
			</Stack>
		</Container>
	);
};

export default Projects;
