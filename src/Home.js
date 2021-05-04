import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import Footer from "./Components/Footer/Footer.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";

import Particle from "./Particle.js";

const Home = () => {
  return (
    <div>
      <div class="flex flex-col wrapper items-center bg-black w-full">
        <Particle />
        <header class="text-white bg-black-400  px-3 py-4 flex justify-center rounded-b-3xl w-full">
          {" "}
          <Navbar />
        </header>
        <main class=" bg-black w-full">
          <div class="flex flex-col justify-center w-full">
            <Hero />
          </div>
        </main>
      </div>
      <footer class="text-white px-3 py-3 bg-black-400  flex rounded-t-3xl w-full">
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
