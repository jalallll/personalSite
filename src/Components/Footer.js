import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
	Box,
	Container,
	IconButton,
	Typography,
	Stack,
	Divider,
} from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<Box
			bgcolor="black"
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				paddingY: 3,
				justifyContent: "center",
				height: 100,
				borderTopLeftRadius: 50,
				borderTopRightRadius: 50,
				borderTop: 1,
			}}
		>
			<Typography variant="h5" borderBottom={2}>
				Let's Connect
			</Typography>
			<Stack
				direction="row"
				spacing={5}
				alignItems="center"
				divider={<Divider orientation="horizontal" flexItem />}
				sx={{ paddingTop: 1, display: "flex", flexWrap: "wrap" }}
			>
				<IconButton>
					<LinkedInIcon
						onClick={() =>
							window.open("https://www.linkedin.com/in/jalal-q-5352a31b0/")
						}
					/>
				</IconButton>
				<IconButton>
					<GitHubIcon
						onClick={() => window.open("https://github.com/jalallll")}
					/>
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Footer;
