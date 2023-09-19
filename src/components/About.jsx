import React from "react";
import about1 from "../assets/pexels-gustavo-fring-7156128.jpg";

const About = () => {
  return (
    <div className="py-36">
      <div className="flex items-center max-w-5xl m-auto gap-x-16">
        <div className="w-[40%] h-96 relative">
          <div className="bg-[#E3CCAE] absolute -top-10 w-[26rem] h-96 -z-10 right-6"></div>
          <div className="w-[100%] h-[100%]">
            <img src={about1} className="w-[100%] h-[100%]" alt="" />
          </div>
        </div>
        <div className="w-[60%]">
          <div className="max-w-lg flex flex-col gap-y-4 m-auto">
            <h3 className="text-3xl font-semibold">
              We create some things, Design for your success future.
            </h3>
            <p>
              Lorem Ipsum is simply dumm of free available in market the way
              printing and typesetting industry has been the industrys standard
              dummy text ever.{" "}
            </p>
            <div>
              <div className="flex gap-x-4 items-center">
                <div className="w-3 h-3 bg-[#E3CCAE] rounded-full"></div>
                <p className="font-semibold">
                  Price of additional materials or parts (if needed){" "}
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-3 h-3 bg-[#E3CCAE] rounded-full"></div>
                <p className="font-semibold">
                  Transportation cost for carrying new materials/parts
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-3 h-3 bg-[#E3CCAE] rounded-full"></div>
                <p className="font-semibold">
                  You will get 100% money back offer.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center max-w-5xl m-auto mt-32 gap-x-16">
        <div className="w-[40%] h-96 relative">
          <div className="bg-[#E3CCAE] absolute -top-10 w-[26rem] h-96 -z-10 -right-14"></div>
          <div className="w-[100%] h-[100%]">
            <img src={about1} className="w-[100%] h-[100%]" alt="" />
          </div>
        </div>
        <div className="w-[60%]">
          <div className="max-w-lg flex flex-col gap-y-4 m-auto">
            <h3 className="text-3xl font-semibold">
              We create some things, Design for your success future.
            </h3>
            <p>
              Lorem Ipsum is simply dumm of free available in market the way
              printing and typesetting industry has been the industrys standard
              dummy text ever.{" "}
            </p>
            <div>
              <div className="flex gap-x-4 items-center">
                <div className="w-3 h-3 bg-[#E3CCAE] rounded-full"></div>
                <p className="font-semibold">
                  Price of additional materials or parts (if needed){" "}
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-3 h-3 bg-[#E3CCAE] rounded-full"></div>
                <p className="font-semibold">
                  Transportation cost for carrying new materials/parts
                </p>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="w-3 h-3 bg-[#E3CCAE] rounded-full"></div>
                <p className="font-semibold">
                  You will get 100% money back offer.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
