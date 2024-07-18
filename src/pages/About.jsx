import React from "react";
import { aboutimage } from "../assets/images";

const About = () => {
  return (
    <div className="  w-full">
      <h1 className="font-bold lg:text-[50px] md:text-[40px] text-[30px] lg:ml-32 md:ml-28 ml-10 md:py-14 py-8">
        About Us
      </h1>

      <div>
        <div className="bg-[#028D53] h-[600px] md:w-[700px] text-white">
          <div className="text-center font-bold">
            <h1 className=" lg:text-[50px] md:text-[40px] text-[30px] md:py-10 py-8">
              <span className="border-2 p-3">VOTE</span> RIGHT
            </h1>
            <p>Your Voice. Your Vote. Your Impact</p>
          </div>
        </div>
        {/* <div className="flex justify-center h-[300px] w-[600px] mx-auto pt-52"> */}
          {/* <img src={aboutimage} alt="aboutimage" /> */}
        {/* </div> */}
      </div>
      <div className="bg-black  text-white">
        <h1 className="font-bold text-[40px] ">Our Mission</h1>
        <p className="font-light text-[24px]">Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque.Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque. Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque. </p>
        <h1 className="font-bold text-[40px] ">Our Mission</h1>
        <p className="font-light text-[24px]">Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque.Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque. Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque. </p>
      </div>
    </div>
  );
};

export default About;
