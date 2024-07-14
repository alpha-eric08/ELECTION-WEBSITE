import { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { logo } from '../assets/images';
import { BiSolidBell } from 'react-icons/bi';

const Navbar = () => {
      let Links =[
        {name:"Home",link:"/"},
        {name:"Elections",link:"/ election"},
        {name:"About Us",link:"/about"},
        {name:"Contact Us",link:"/contact"},
      ];

      let [open,setOpen]=useState(false);

 
  return (
    <div className='shadow-md w-full sticky z-10 top-0 left-0'>
      <div className='flex items-center md:justify-between gap-28 bg-white py-1 md:px-10 px-2'>
       <div>
          <a href="/"><img src={ logo} alt="logo" className=' h-16 md:ml-10'/></a>
       </div>
       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-2 top-6 cursor-pointer md:hidden'>
       {open ?<MdOutlineClose/> : <IoMenu />}
       </div>
       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
         {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-20   md:my-0 my-7'>
              <a href={link.link} className=' hover:text-gray-400 duration-500 text-lg font-inter font-semibold'>{link.name}</a>
            </li>
          ))
        }
        </ul>

       {/* Avartar and notification icon */}
       <div className={`flex items-center  w-44  static z-auto left-0   md:justify-between justify-around transition-all duration-500 ease-in `}>
        <div className='text-[#00906C] hover:text-[#113a30]'>
          <BiSolidBell size={40}/>
        </div>
        <div>
          <img src="" alt="" className='border-[#00906C] h-[50px] w-[50px] hover:bg-[#113a30] rounded-full border-4 ' />
        </div>
       </div>
      </div>
    </div>
   )
 }

export default Navbar