import React from "react";

const Home = (props) => {
  return (
    <div class="flex flex-col items-center">
      <header class="text-white bg-black-300 w-full px-4 py-5 flex justify-center">
        <div class="max-w-4xl w-full">
          <div class="flex flex-row items-center justify-around">
            <div class="">Jalal</div>
            <button type="button" class="">
              <svg
                class="fill-current"
                viewBox="0 0 100 80"
                width="20"
                height="20"
              >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main class="w-full flex justify-center">
        <div class="bg-black w-full flex p-3 justify-around items-around">
          <div class="bg-black-300 w-full text-white flex  justify-center m-2 rounded-xl">
            Jalal
          </div>
          <div class="bg-blue-300 w-full text-white flex  justify-center m-2 rounded-xl">
            Jalal
          </div>
        </div>
      </main>
      <footer class="text-white px-3 py-3 bg-black-300 w-full flex justify-center">
        <p>Copyright © 2021 Jalal</p>
      </footer>
    </div>
  );
};
export default Home;
