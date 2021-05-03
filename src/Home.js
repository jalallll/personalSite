import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import Footer from "./Components/Footer/Footer.js";
import Skills from "./Components/Skills/Skills.js";
import Projects from "./Components/Projects/Projects.js";

import Particle from "./Particle.js";

const Home = () => {
  return (
    <div class="flex flex-col items-center bg-black">
      <header class="text-white bg-black-400 w-full px-3 py-4 flex justify-center rounded-b-3xl">
        <Navbar />
      </header>
      <main class="w-full bg-black">
        <div class="flex flex-col justify-center">
          <Hero />
          <div class="flex justify-center bg-black mt-10 mb-20 p-20">
            <div class="bg-black w-3/5 p-20 items-center rounded-3xl opacity-50">
              <Skills />
            </div>
          </div>
        </div>
      </main>
      <footer class="text-white px-3 py-3 bg-black-400 w-full flex rounded-t-3xl">
        <Footer />
      </footer>
    </div>
  );
};
export default Home;
