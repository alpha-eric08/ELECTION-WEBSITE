import React from "react";
import { aboutimage } from "../assets/images";

const About = () => {
  return (
    <div className="bg-gray-600 h-[1000px] w-full">
      <h1 className="font-bold lg:text-[50px] md:text-[40px] text-[30px] lg:ml-32 md:ml-28 ml-10 md:py-14 py-8">
        About Us
      </h1>

      <div>
        <div className="bg-[#028D53] absolute md:w-[700px] text-white">
          <div className="text-center font-bold">
            <h1 className=" lg:text-[50px] md:text-[40px] text-[30px] md:py-10 py-8">
              <span className="border-2 p-3">VOTE</span> RIGHT
            </h1>
            <p>Your Voice. Your Vote. Your Impact</p>
          </div>
        </div>
        <div className="relative flex justify-center h-[300px] w-[600px] mx-auto pt-52">
          <img src={aboutimage} alt="aboutimage" />
        </div>
      </div>
    </div>
  );
};

export default About;
