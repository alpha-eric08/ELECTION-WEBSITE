import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object().shape({
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

// eslint-disable-next-line react/prop-types
function Reset({ modaContent,setOpenModal}) {

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
            <h2 className="text-4xl font-semibold py-5">Reset Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mb-10 text-left">
                <label htmlFor="password">Enter New Password</label>
                <input type="password" {...register('password')} className="w-full border-2 border-[#079077] py-2  px-2 rounded-xl outline-none bg-[#F6F6F6]" />
            </div>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            {/* con pass */}
            <div className="flex flex-col gap-2 text-left">
                <label htmlFor="confirmpassword">Confirm New Password</label>
                <input type="password" {...register('confirmpassword')} className="w-full border-2 border-[#079077] py-2  px-2 rounded-xl outline-none bg-[#F6F6F6]" />
            </div>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <button className="px-16  text-white font-bold bg-[#00906C] hover:bg-[#185248f4] mt-8  text-[20px] rounded-md py-3" type="submit">Reset Password</button>
        </form>
           {modaContent}
        </div>
      </div>
    </div>
  );
}

export default Reset;
