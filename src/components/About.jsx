import React from "react";
import {
  FaRocket,
  FaBriefcase,
  FaUserAlt,
  FaGraduationCap,
} from "react-icons/fa";
import christie from "../assets/christina.png";
import olawale from "../assets/olawale.png";

const About = () => {
  return (
    <div className="py-20 px-3">
      <div>
        <div className="flex gap-x-1 items-end">
          <h1 className="font-bold text-5xl text-mainGold">HR</h1>
          <div>
            <p className="leading-3 font-light">
              Welcome to <br />
              <span className="text-2xl font-medium">CONSULT!</span>
            </p>
          </div>
        </div>
        <p className="my-6 text-gray-400 leading-7">
          We believe in the value that our functions add to a business. We feel
          that this specialist part of HR is often unrecognised for its
          contribution to the profitability and success of a business.
        </p>
        <div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaRocket className="text-gray-300 text-xl" />
            </div>
            <p className="capitalize font-light">
              <span className="text-3xl font-medium text-mainGold">638</span>{" "}
              Companies We Helped
            </p>
          </div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaBriefcase className="text-gray-300 text-xl" />
            </div>
            <p className="capitalize font-light">
              <span className="text-3xl font-medium text-mainGold">12</span>{" "}
              Corporate Programs
            </p>
          </div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaGraduationCap className="text-gray-300 text-xl" />
            </div>
            <p className="capitalize font-light">
              <span className="text-3xl font-medium text-mainGold">28</span>{" "}
              Training Courses
            </p>
          </div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaUserAlt className="text-gray-300 text-xl" />
            </div>
            <p className="capitalize font-light">
              <span className="text-3xl font-medium text-mainGold">125</span>{" "}
              Strategic Partners
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={olawale} alt="olawale.png" className="w-[80%] mx-auto" />
      </div>
    </div>
  );
};

export default About;
