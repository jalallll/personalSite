import React from "react";

const pageNames = ["Home", "Skills", "Projects", "Contact", "Resume"];

const Nav_bar = () => {
	return (
		<div class="w-screen bg-slate-900 h-20 ">
			<div class="w-full h-full px-3 sm:px-4 md:px-10 flex justify-between items-center">
				<h1 class="sm:text-4xl text-white font-cursive font-semibold">Jalal</h1>
				<ul class="flex justify-items-end ">
					{pageNames.map((page) => (
						<li class="px-1 sm:px-2 sm:text-2xl lg:mx-4 text-white cursor-pointer hover:border-b-2">
							<a href={`/${page}`}>{page}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Nav_bar;
