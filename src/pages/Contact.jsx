import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { MdMail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='flex justify-between py-10'>
        <div className='px-20'>
            <h1 className='font-semibold text-[40px]'>CONTACT US</h1>
            <p className='my-7'>Feel free to contact contact us anytime. We will get back to you as soon as we can.</p>

            <form className='font-medium text-[20px] '>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" className='border-[#7A7A7A] border-2  w-full rounded bg-[#FFFFFF]' id='name' />
                </div>
                <div className='flex flex-col gap-3 my-5'>
                    <label htmlFor="Email">Email</label>
                    <input type="text" className='border-[#7A7A7A] border-2  w-full rounded bg-[#FFFFFF]' id='Email' />
                </div>
                <div className='flex flex-col gap-3 my-5'>
                    <label htmlFor="message">Text message</label>
                    <textarea name="message" id="message" className='border-[#7A7A7A] border-2 resize-none h-24 w-full rounded bg-[#FFFFFF]'></textarea>
                </div>
                <div className='text-center'>
                    <button type='submit' className='bg-[#007457] py-2 px-[155px] hover:bg-[#175042] rounded-lg text-white font-semibold text-xl'>SEND</button>
                </div>
            </form>
        </div>
        <div className='bg-[#00906C] p-5 h-72 mt-32 text-white w-[500px]'>
            <h1 className='font-semibold text-[40px]'>Info</h1>
            <div className='flex text-[24px] font-medium gap-4 mt-10'>
                <MdMail size={30} className='mt-1.5'/>
                <p>chippycode@gmail.com</p>
            </div>
            <div className='flex text-[24px] font-medium gap-4 my-10'>
                <BiPhoneCall size={30} className='mt-1.5'/>
                <p>+233 234500000</p>
            </div>
        </div>
    </div>
  )
}

export default Contact