import {
	AppBar,
	Box,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Projects", "Resume", "Contact"];

const NavBar = () => {
	const [menuAnchor, setMenuAnchor] = useState(null);

	const handleOpenNavMenu = (event) => {
		setMenuAnchor(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setMenuAnchor(null);
	};
	return (
		<AppBar position="sticky">
			<Toolbar>
				<Box
					sx={{
						flexGrow: 1,
						display: { xs: "none", md: "flex" },
						marginLeft: "auto",
					}}
				>
					{pages.map((page) => (
						<Button sx={{ my: 2, color: "white", display: "block" }}>
							{page}
						</Button>
					))}
				</Box>

				<Box
					sx={{
						flexGrow: 1,
						display: { xs: "flex", md: "none" },
						marginLeft: "auto",
					}}
				>
					<IconButton onClick={handleOpenNavMenu}>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={menuAnchor}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(menuAnchor)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: "block", md: "none" },
						}}
					>
						{pages.map((page) => (
							<MenuItem key={page} onClick={handleCloseNavMenu}>
								<Typography textAlign="center">{page}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
