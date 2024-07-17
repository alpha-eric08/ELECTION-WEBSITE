import React from 'react'
import { presidents, Secretary } from './data'

const Candidates = () => {
  return (
    <div>
        <h1 className='text-center font-medium text-xl md:text-4xl my-8'>Candidates</h1>

        {/* Presidents */}
        <h1 className='md:font-bold font-semibold text-2xl md:text-4xl text-[#00906C] pl-16 mb-10'>Presidency</h1>
        <div className=' flex flex-wrap justify-center gap-16'>
          {presidents.map((data) => {
            return (
              <div key={data.id} className='w-[330px]  bg-white shadow-2xl shadow-black py-6 px-16 rounded-xl mb-16'>
                <img src={data.image}  className='h-[200px] w-[200px] rounded-full bg-gray-600 mx-auto'/>
                <h1 className='font-semibold text-[30px] text-center mt-3 mb-1'>{data.name}</h1>
                <p className='text-center'>{data.level}</p>
                <div className='text-center flex-col flex gap-4 mt-8'>
                  <a href="/vote">
                    <button className=' bg-[#00906C] text-white hover:bg-[#014534] rounded-xl font-bold text-xl py-2 w-full'>VOTE</button>
                  </a>
                  <a href="/profile">
                    <button className='text-center text-[#00906C] bg-white border-2 border-[#00906C] hover:text-[#014534] w-full rounded-xl font-bold text-xl py-2 px-8'>View Profile</button>
                  </a>
                </div>
                </div>
            )
          })}
        </div>

        {/* Secretary */}
        <h1 className='md:font-bold font-semibold text-2xl md:text-4xl text-[#00906C] pl-16 mb-10'>Secretary</h1>
        <div className=' flex flex-wrap justify-center gap-16'>
        {Secretary.map((data) => {
            return (
              <div key={data.id} className='w-[330px]  bg-white shadow-2xl shadow-black py-6 px-16 rounded-xl mb-16'>
                <img src={data.image}  className='h-[200px] w-[200px] rounded-full bg-gray-600 mx-auto'/>
                <h1 className='font-semibold text-[30px] text-center mt-3 mb-1'>{data.name}</h1>
                <p className='text-center'>{data.level}</p>
                <div className='text-center flex-col flex gap-4 mt-8'>
                    <button className=' bg-[#00906C] text-white hover:bg-[#014534] rounded-xl font-bold text-xl py-2'>VOTE</button>
                    <button className='text-center text-[#00906C] bg-white border-2 border-[#00906C] hover:text-[#014534] rounded-xl font-bold text-xl py-2 px-8'>View Profile</button>
                </div>
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default Candidates