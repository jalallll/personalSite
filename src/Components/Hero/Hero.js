import React from "react";
import hello from "../../assets/hello.png";
const Hero = () => {
  return (
    <div class="bg-black w-full flex flex-row p-3 justify-center sm:mt-10 lg:mg-20">
      <img src={hello} class="transform md:scale-50 lg:scale-75 "></img>
      <div class="text-white pt-20 ml-20">
        <h1 class="lg:text-4xl">Hello, I'm Jalal.</h1>
        <h1 class="lg:text-3xl pt-2">I'm a Full Stack Software Developer</h1>
        <div class="flex justify-evenly mt-8">
          <button class="font-semibold bg-green-600 text-black-900 pt-2 pb-2 pr-3 pl-3 rounded-full hover:bg-green-400 ring-2 ">
            Github
          </button>
          <button class="lg:ml-15 font-semibold bg-green-600 text-black-900 pt-2 pb-2 pr-3 pl-3 rounded-full hover:bg-green-400 ring-2">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
