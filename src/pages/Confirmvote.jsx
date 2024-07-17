import React from 'react'
import { IoReturnUpBack } from 'react-icons/io5'
import { pres1 } from '../assets/images'

const Confirmvote = () => {
  return (
    <div className=''>
        <div className="flex my-10 md:pl-16 pl-5 font-semibold text-[31px] gap-5">
            <a href="/vote" className="flex  gap-5 hover:text-black/20">
                <IoReturnUpBack size={45}/>
                <h1>Back</h1>
            </a>
        </div>
        <div className=' rounded-2xl w-[700px] mx-auto shadow-xl shadow-black my-10'>
            <div>
                <h1 className='font-semibold text-[15px] md:text-[20px] text-center py-10 lg:text-[26px]'>Confirm Vote</h1>
                <h2 className='font-semibold lg:text-[35px] text-[20px] text-center px-16 pb-10 md:text-[25px]'>Are you sure you want to vote for this candidate ?</h2>
            </div>
            <div className='flex justify-center'>
                <img src={pres1} alt="image" className='h-[200px] w-[200px]'/>
            </div>
            <div className='text-center'>
                <h1 className='font-semibold lg:text-[45px] md:text-[35px] text-[25px]'>Abdul Salia</h1>
                <p className='font-medium text-[15px] md:text-[24px] lg:text-[30px]'>L 300</p>
                <h2 className='text-[#00906C] lg:text-[36px] md:text-[28px] text-[20px]'>SRC President</h2>
                <div className='flex flex-col'>
                    <div>
                        <a href="/sucessful">
                            <button className=' bg-[#00906C] text-white hover:bg-[#014534] rounded-xl font-bold text-xl px-8 py-2 w-[30%] mt-12'>Confirm</button>
                        </a>
                    </div>
                    <div>
                        <button className='text-center w-[30%] text-[#00906C] bg-white border-2 border-[#00906C] hover:text-[#014534] mt-6 rounded-xl font-bold text-xl py-2 px-8'>Cancel</button>
                    </div>
                    <p className='my-10'>Once confirmed this action cannot be undone</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Confirmvote