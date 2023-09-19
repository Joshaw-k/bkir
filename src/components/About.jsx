import React from "react";
import {
  FaRocket,
  FaBriefcase,
  FaUserAlt,
  FaGraduationCap,
} from "react-icons/fa";
import christie from "../assets/christina.png";

const About = () => {
  return (
    <div className="py-20 px-3">
      <div>
        <div className="flex gap-x-1 items-end">
          <h1 className="font-bold text-5xl">HR</h1>
          <div>
            <p className="leading-3 font-light">
              Welcome to <br />
              <span className="text-2xl font-medium">CONSULT!</span>
            </p>
          </div>
        </div>
        <p className="my-6">
          We believe in the value that our functions add to a business. We feel
          that this specialist part of HR is often unrecognised for its
          contribution to the profitability and success of a business.
        </p>
        <div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaRocket className="text-gray-300 text-lg" />
            </div>
            <p className="capitalize">
              <span className="text-3xl font-medium">638</span> companies we
              helped
            </p>
          </div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaBriefcase className="text-gray-300 text-lg" />
            </div>
            <p className="capitalize">
              <span className="text-3xl font-medium">12</span> corporate
              programs
            </p>
          </div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaGraduationCap className="text-gray-300 text-lg" />
            </div>
            <p className="capitalize">
              <span className="text-3xl font-medium">28</span> training courses
            </p>
          </div>
          <div className="border-b-2 flex gap-x-3 items-center py-2">
            <div>
              <FaUserAlt className="text-gray-300 text-lg" />
            </div>
            <p className="capitalize">
              <span className="text-3xl font-medium">125</span> strategic
              partners
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={christie} alt="christie.png" className="w-[80%]" />
      </div>
    </div>
  );
};

export default About;
