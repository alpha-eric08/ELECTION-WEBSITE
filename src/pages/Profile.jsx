import React, { useState } from "react";
import { pres1 } from "../assets/images";
import { IoReturnUpBack } from "react-icons/io5";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";


const Profile = () => {

const [about, setAbout] = useState(false)


const handleabout = () =>{
  setAbout(!about);
}

  return (
    <div>
      <div className="flex my-10 pl-16 font-semibold text-[31px] gap-5">
        <a href="/" className="flex  gap-5 hover:text-black/20">
          <IoReturnUpBack size={45}/>
          <h1>Back</h1>
        </a>
      </div>
      <div className="w-[800px] px-20 mx-auto rounded-xl mb-20 shadow-xl py-10 shadow-black/25">
        <h1 className="text-center font-semibold mb-5 text-2xl">Candidate Profile</h1>
        <div>
          <img src={pres1} alt="" className="w-[334px] h-[334px] bg-black/25 rounded-full mx-auto"/>
          <h1 className='font-semibold md:text-[60px] text-4xl text-center mt-12 mb-8'>Abdul Salia</h1>
          <p className='text-center font-medium text-2xl md:text-[30px]'>L 300</p>
          <div className=' justify-center flex gap-10 mt-16 mb-10'> 
            <button onClick={handleabout} className=' hover:text-[#00906C] text-black hover:border-b-2 border-[#00906c] font-medium  md:text-4xl px-7'>About</button>
            <button className=' hover:text-[#00906C] text-black hover:border-b-2 border-[#00906c] font-medium  md:text-4xl px-7'>Contacts</button>
          </div>
          {/* About */}
          {/* <div>
            <h1 className="font-semibold text-5xl my-8">Biography</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Donec feugiat cras adipiscing ipsum nullam felis. Sed pretium pharetra velit lectus libero viverra lectus donec. Mi at in ut lacinia id donec non. Placerat ornare semper amet enim feugiat.</p>
            <h1 className="font-semibold text-5xl mt-12 mb-8">Election Manifesto</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Donec feugiat cras adipiscing ipsum nullam felis. Sed pretium pharetra velit lectus libero viverra lectus donec. Mi at in ut lacinia id donec non. Placerat ornare semper amet enim feugiat.</p>
          </div> */}
          {/* Contact */}
          <div>
            <h1 className="font-semibold text-5xl my-8">Social Media Networks</h1>
            <div className=" text-[#00906C] hover:text-[#164237]  flex gap-10">
              <FaLinkedinIn size={45} />
              <AiFillInstagram size={45} />
              <FaFacebookF size={45} />
              <FaTwitter size={45} />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-4xl mt-14 mb-8">Email Me</label>
              <div className="bg-red-500 border-2 p-3 ">
                <textarea type="text" className=" resize-none outline-none flex left-3 h-24 w-full" />
                <IoMdSend className="text-4xl text-right" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
              <button className=' bg-[#00906C] text-white hover:bg-[#014534] rounded-xl font-bold text-xl py-2 px-32'>VOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
