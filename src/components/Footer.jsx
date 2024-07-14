import React from 'react'
import { BiMessage } from 'react-icons/bi'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { LiaLinkedin } from 'react-icons/lia'

const Footer = () => {
  return (
    <div className='h-[270px] bg-[#00906C] flex justify-between flex-wrap px-10 text-white py-8'>
      <div>
        <ul>
          <li>Categories</li>
          <li>Candidates</li>
          <li>Manifestoes</li>
        </ul>
      </div>
      <div>
        <h1 className=' font-medium text-[30px]'>About Us</h1>
      </div>
      <div>
        <h1>Contact Us</h1>
        <p>Previous Results</p>
        <p>Ballot Information</p>
      </div>
      <div className='flex gap-5'>
        <LiaLinkedin  size={30}/>
        <BiMessage  size={30}/>
        <FiInstagram size={30}/>
        <FiFacebook  size={30}/>
        <FiTwitter  size={30}/>
      </div>
    </div>
  )
}

export default Footer