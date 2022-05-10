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

const Projects = () => {
	return (
		<div class="w-screen h-screen flex flex-col items-center justify-center">
			<h1>Projects</h1>
			<div>
				<div class="w-60 h-60 bg-slate-900 rounded-lg"></div>
			</div>
		</div>
	);
};

export default Projects;
