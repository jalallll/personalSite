import React from "react";
import { DiGithubBadge } from "react-icons/di";

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
		title: "Reliable Data Transport",
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

const ProjectCard = (props) => {
	return (
		<div>
			<div class="w-80 h-auto bg-slate-900 rounded-lg flex flex-col border-2">
				<div class="w-full h-10 bg-slate-500 flex justify-between items-center px-4 rounded-tr-lg rounded-tl-lg border-b-2">
					<h1>{props.project.title}</h1>
					<a href={props.project.link}>
						<DiGithubBadge size="2.5em" />
					</a>
				</div>
				<img class="w-full h-52" src={props.project.image} />
				<div class="w-full h-10 bg-slate-500 flex justify-between items-center px-4 border-b-2 border-t-2">
					<h1 class="">{props.project.tools}</h1>
				</div>
				<div class="w-full h-auto bg-slate-500 flex justify-between items-center py-2 px-4 rounded-br-lg rounded-bl-lg ">
					<h1 class="">{props.project.description}</h1>
				</div>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div
			id="Projects"
			class="w-screen h-screen flex flex-col flex-wrap items-center justify-center space-y-10 "
		>
			<h1 class="text-2xl sm:text-3xl lg:text-5xl border-b-2">Projects</h1>
			{projects.map((project) => (
				<ProjectCard project={project} />
			))}
		</div>
	);
};

export default Projects;
