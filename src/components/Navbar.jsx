import React from "react";

const Navbar = () => {
  return (
    <header class="absolute md:max-w-2xl lg:max-w-4xl mx-auto left-0 top-0 right-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-mainGold  border-b border-b-mainGold md:border-b-0 text-sm py-3 md:py-5 sm:py-0">
      <nav
        class="relative max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center justify-between px-4">
          <a
            class="flex-none text-xl font-semibold text-white"
            href="#"
            aria-label="Brand"
          >
            BKIR
          </a>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white font-medium text-mainGold shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-mainGold transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden w-4 h-4 text-white"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                class="hs-collapse-open:block hidden text-white w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div class="flex bg-white flex-col gap-y-4 px-3 py-6 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <a
              class="font-medium sm:py-6 text-mainGold hover:pl-3"
              href="#"
              aria-current="page"
            >
              Landing
            </a>
            <a class="font-medium /[.8] hover: sm:py-6 text-mainGold" href="#">
              Account
            </a>
            <a class="font-medium /[.8] hover: sm:py-6 text-mainGold" href="#">
              Work
            </a>
            <a class="font-medium /[.8] hover: sm:py-6 text-mainGold" href="#">
              Blog
            </a>

            <button className="bg-mainGold text-white inline-block py-3 px-3  font-semibold">
              Get In Touch
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
