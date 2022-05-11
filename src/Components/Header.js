import React from "react";
const bitmoji = require("../assets/bitmoji.png");
const Header = () => {
	return (
		<div
			id="Home"
			class="w-auto h-screen flex flex-row justify-center items-center"
		>
			<img src={bitmoji} class="w-40 h-40" />
			<div class=" flex flex-col items-start px-5 space-y-2 mt-40">
				<h1 class="text-2xl sm:text-3xl lg:text-5xl">Hey, I'm Jalal</h1>
				<h2 class="text-sm lg:text-3xl">Full Stack Developer</h2>
				<p class="lg:text-xl">
					I am experienced in web development, machine learning, and mobile
					development.
				</p>
				<div class="self-start flex flex-col space-y-2 lg:space-y-4">
					<a href="#Skills">
						<button class="mt-5 lg:text-xl lg:mt-20 w-40">Learn More</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
