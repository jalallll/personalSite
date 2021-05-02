import React from "react";
import hello from "./assets/hello.png";
import Navbar from "./Components/Navbar/Navbar.js";
const Home = () => {
  return (
    <div class="flex flex-col items-center bg-black">
      <header class="text-white bg-black-400 w-full px-3 py-4 flex justify-center rounded-b-3xl">
        <Navbar />
      </header>
      <main class="w-full bg-black">
        <div class="bg-black w-full flex flex-row p-3 justify-around">
          <img src={hello} class="transform md:scale-50 lg:scale-75 "></img>
          <div class="text-white pt-20">
            <h1>Hello, I'm Jalal.</h1>
            <p class="pt-2">I am a software engineer</p>
          </div>
        </div>
      </main>
      <footer class="text-white px-3 py-3 bg-black-400 w-full flex rounded-t-3xl">
        <p class=" flex justify-center w-full">Copyright © 2021 Jalal</p>
      </footer>
    </div>
  );
};
export default Home;
