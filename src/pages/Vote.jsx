import React from 'react'
import { HiOutlineIdentification } from "react-icons/hi2";
import { IoReturnUpBack } from 'react-icons/io5';

const Vote = () => {
  return (
    <div className='my-10'>
       <div className="flex my-10 pl-5 md:pl-16 font-semibold text-[31px] gap-5">
        <a href="/" className="flex  gap-5 hover:text-black/20">
          <IoReturnUpBack size={45}/>
          <h1>Back</h1>
        </a>
      </div>
      <div className='md:w-[900px] mx-2 pb-10 md:mx-auto bg-white shadow-xl shadow-black'>
        <h1 className='font-semibold text-[20px] md:text-[30px] text-center py-10 lg:text-[40px]'>Confirm Identification</h1>
        <h2 className='font-semibold lg:text-[52px] text-[30px] text-center pb-10 md:text-[40px]'>Enter your Identification <br /> Information</h2>

        <form className='md:px-20 px-7'>
          <div>
            <label htmlFor="cards" className='font-medium text-[30px] '>Card Type</label>
            <div className='flex border-2 border-[#00906C] rounded-2xl px-3 py-[4px] bg-[#F6F6F6]'>
              <HiOutlineIdentification size={35}/>
              <select name="options" id="cards" className='w-full    rounded-r-2xl pl-4 bg-[#F6F6F6] text-[20px] font-semibold'>
                <option value="option1">Students ID</option>
                <option value="option2">Card 2</option>
                <option value="option3">Card 3</option>
              </select>
            </div>
          </div>
          <div className='my-7 flex flex-col'>
            <label htmlFor="number" className='font-medium text-[30px] '>ID Number</label>
            <input type="text" id='number' className='w-full  border-2 border-[#00906C] bg-[#F6F6F6] rounded-2xl px-3 py-[8px] mt-3' />
          </div>
          <div className='my-7 flex flex-col'>
            <label htmlFor="registration" className='font-medium text-[30px] '>Registration Number</label>
            <input type="text" id='registration' className='w-full  border-2 border-[#00906C] bg-[#F6F6F6] rounded-2xl px-3 py-[8px] mt-3' />
          </div>
          <div className=' flex justify-center'>
            <button className=' bg-[#00906C] text-white hover:bg-[#014534] rounded-xl font-bold text-2xl py-2 w-[50%]'>Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Vote