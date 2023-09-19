import React from "react";

const Navbar = () => {
  return (
    <header class="absolute left-0 top-0 right-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent border-b text-sm py-3 sm:py-0">
      <nav
        class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <a
            class="flex-none text-xl font-semibold text-mainGold"
            href="#"
            aria-label="Brand"
          >
            BKIR
          </a>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-mainGold font-medium text-mainGold shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-mainGold transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden w-4 h-4"
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
                class="hs-collapse-open:block hidden w-4 h-4"
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
          <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <a
              class="font-medium sm:py-6 text-mainGold hover:pl-3 hover:bg-white"
              href="#"
              aria-current="page"
            >
              Landing
            </a>
            <a
              class="font-medium text-white/[.8] hover:text-white sm:py-6 text-mainGold"
              href="#"
            >
              Account
            </a>
            <a
              class="font-medium text-white/[.8] hover:text-white sm:py-6 text-mainGold"
              href="#"
            >
              Work
            </a>
            <a
              class="font-medium text-white/[.8] hover:text-white sm:py-6 text-mainGold"
              href="#"
            >
              Blog
            </a>

            <button className="bg-mainGold hover:bg-white hover:text-mainGold inline-block py-3 px-3  font-semibold">
              Get In Touch
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
/**
 <div className="bg-transparent absolute left-0 top-0 right-0">
      <div className="flex justify-between items-center max-w-[100rem] py-5">
        <div>
          <h1 className="text-5xl ml-24 text-[#E3CCAE] font-bold">BKIR</h1>
        </div>
        <div className="flex gap-x-10">

          <div className="flex items-center gap-x-5">
        
            <p className="text-white font-semibold hover:text-[#E3CCAE]">
              About Us
            </p>
            <p className="text-white font-semibold hover:text-[#E3CCAE]">
              Services
            </p>
            <p className="text-white font-semibold hover:text-[#E3CCAE]">
              Testimony
            </p>
            <p className="text-white font-semibold hover:text-[#E3CCAE]">
              Contact Us
            </p>
            <p className="text-white font-semibold hover:text-[#E3CCAE]">
              FAQS
            </p>
          </div>
          {/
          <div>
            <button className="bg-[#E3CCAE] hover:bg-white hover:text-[#E3CCAE] inline-block py-3 px-3  font-semibold">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
 */
/**
 
 */
