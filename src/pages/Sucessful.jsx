import React from "react";
import { succss } from "../assets/images";

const Sucessful = () => {
  return (
    <div className=" w-[600px] mx-auto rounded-2xl shadow-xl shadow-black my-8 text-center py-8">
      <h1 className=" font-semibold text-[27px]">
        THANK YOU!!! <br /> Your vote has been submitted <br />
        successfully
      </h1>
      <div className="flex justify-center">
        <img src={succss} alt="" className=""/>
      </div>
      <div className="text-center flex-col flex gap-4 mt-8">
        <a href="#">
          <button className=" bg-[#00906C] text-white hover:bg-[#014534] rounded-xl font-bold text-xl py-2 px-12 ">
            Vote for Secretariat Position
          </button>
        </a>
        <a href="/">
          <button className="text-center text-[#00906C] bg-white border-2 border-[#00906C] hover:text-[#014534] rounded-xl font-bold text-xl py-2 px-10">
            Back to Homepage
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sucessful;
