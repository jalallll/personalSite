import React from "react";

const Home = (props) => {
  return (
    <div class="flex flex-col items-center bg-black">
      <header class="text-white bg-black-300 w-full px-4 py-5 flex justify-center rounded-b-3xl">
        <div class="flex flex-row items-center justify-between w-full">
          <div class="pl-8">Jalal</div>
          <button type="button" class="pr-6 md:hidden">
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div class="hidden md:block pr-4">
            <a class="p-4">Home</a>
            <a class="p-4">My Experience</a>
            <a class="p-4">Contact Me</a>
          </div>
        </div>
      </header>
      <main class="w-full bg-black">
        <div class="bg-black w-full flex flex-row p-3 justify-around items-around ">
          <div class="flex flex-row bg-blue-800">
            <div class="bg-black-300 w-full text-white flex flex-start   m-2 rounded-xl">
              Jalal
            </div>
          </div>
          <div class="flex flex-row bg-blue-800 rounded-xl m-0.5 m-2">
            <div class="bg-black-300 text-white flex flex-start   m-0.5 rounded-xl m-2">
              Jalal
            </div>
          </div>
        </div>
      </main>
      <footer class="text-white px-3 py-3 bg-black-300 w-full flex justify-center rounded-t-3xl">
        <p>Copyright © 2021 Jalal</p>
      </footer>
    </div>
  );
};
export default Home;
