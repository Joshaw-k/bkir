import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="bg-[rgba(0,0,0,0.5)] h-screen flex flex-col items-center justify-center ">
        <div className="grid">
          <h2 className="text-3xl text-mainGold font-light text-center">
            Launch Your Recruitment Career
          </h2>
          <h1 className="text-4xl font-bold text-mainGold text-center">
            With Innovation Consultancy
          </h1>
          <button className="text-mainGold py-3 bg-transparent border-2 border-mainGold hover:text-white hover:bg-mainGold px-6 w-[55%] mx-auto mt-10">
            JOIN OUR HR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
