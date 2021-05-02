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
const Navbar = () => {
  return (
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

      <button type="button" class="pr-6 md:hidden " id="bars" onClick={drop}>
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
        <a class="p-4 hover:bg-black h-full hover:no-underline">Home</a>
        <a class="p-4 hover:bg-black hover:no-underline ">My Experience</a>
        <a class="p-4 hover:bg-black hover:no-underline">Contact Me</a>
      </div>
    </div>
  );
};

export default Navbar;
