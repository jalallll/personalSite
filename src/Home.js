import React from "react";

function drop() {
  const bars = document.querySelector("#bars");
  const menu = document.querySelector("#menu");
  console.log("drop");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add(
      "flex",
      "flex-col",
      "bg-black-200",
      "w-full",
      "absolute",
      "text-center",
      "bottom-0",
      "left-0",
      "right-0"
    );
  } else {
    menu.classList.add("hidden");
    menu.classList.remove(
      "flex",
      "flex-col",
      "bg-black-200",
      "w-full",
      "absolute",
      "text-center",
      "bottom-0",
      "left-0",
      "right-0"
    );
  }
}

const Home = () => {
  return (
    <div class="flex flex-col items-center bg-black">
      <header class="text-white bg-black-400 w-full px-3 py-4 flex justify-center rounded-b-3xl">
        <div class="flex flex-row items-center justify-between w-full">
          <div class="flex flex-row">
            <button type="button" class="pl-8">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <div class="ml-1">Jalal</div>
          </div>

          <button
            type="button"
            class="pr-6 md:hidden "
            id="bars"
            onClick={drop}
          >
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
          <div class="hidden md:block " id="menu">
            <a class="p-4 hover:bg-black  h-full">Home</a>
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
      <footer class="text-white px-3 py-3 bg-black-400 w-full flex justify-center rounded-t-3xl">
        <p>Copyright © 2021 Jalal</p>
      </footer>
    </div>
  );
};
export default Home;
