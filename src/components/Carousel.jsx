import React from 'react'
import { carosel } from './data'

const Carousel = () => {
    return (
        <div className='h-[570px] mt-10'>
            {/* filter bar */}
            <div className='md:h-[82px] h-16 mx-3 md:w-[571px] bg-[#EBEBEB] md:mx-auto rounded-2xl flex justify-center items-center gap-5'>
                <button className='md:h-[54px] px-5 py-3 md:py-0 md:px-0   md:w-[258px] rounded-xl bg-white text-[#00906C] font-semibold text-sm md:text-xl'>ONGOING ELECTIONS</button>
                <button className='md:h-[54px] md:w-[258px] rounded-xl hover:bg-white active:bg-white hover:text-[#00906C] active:text-[#00906C] font-semibold text-sm px-5 py-3 md:py-0 md:px-0 md:text-xl'>UPCOMING ELECTIONS</button>
            </div>

            {/* carousel */}
                <div className='flex justify-center gap-10 overflow-hidden'>
                    {carosel.map((images) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="relative ">
                                <img key={images.id} src={images.image} alt={images.name} className="md:w-[668px] m  rounded-2xl mx-auto mt-10 object-cover" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 md:w-[668px] w-full md:px-4  -translate-y-1/2 text-white font-bold text-2xl text-center">
                                    <h1>{images.topic}</h1>
                                    <p>{images.text}</p>
                                    <p className='text-[#00906C] mt-2 mb-5 font-semibold'>{images.date}</p>
                                    <p className='font-medium text-xl'>{images.describtion}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default Carousel