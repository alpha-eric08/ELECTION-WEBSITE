import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
  });

// eslint-disable-next-line react/prop-types
function Modal2({ modaContent,setOpenModal}) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    
      const onSubmit = (data) => {
        console.log(data); 
      };
  return (
    <div className=" md:px-6 px-8 fixed w-screen bg-slate-700 h-screen bg-opacity-65 ">
      <div className=" relative flex items-center justify-center w-full h-full ">
        <div onClick={()=>setOpenModal(false)} className="absolute w-full h-full top-0 right-0 bottom-0"></div>
        <div className="md:max-w-xl z-10 w-full bg-white text-black text-center rounded-lg p-6 shadow-md">
            <h2 className="text-4xl font-semibold py-5">Forgot Password</h2>
            <p className='mt-4 mb-8 text-left'>Enter your email below. A link will be sent to your email to reset your password to a new one</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2 py-2 bg-[#F6F6F6] border-2 border-[#079077] rounded-xl px-2 text-[#00906C]">
                <MdEmail size={30} />
                <input type="email" {...register('email')} placeholder="Email" className="w-full outline-none bg-[#F6F6F6]" />
            </div>
            {errors.email && <p className="text-red-500 mb-10">{errors.email.message}</p>}

            <button className="px-16  text-white font-bold bg-[#00906C] hover:bg-[#185248f4] mt-8  text-[20px] rounded-md py-3" type="submit">Send link to Email</button>
        </form>
           {modaContent}
        </div>
      </div>
    </div>
  );
}

export default Modal2;
