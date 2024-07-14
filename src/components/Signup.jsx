import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver correctly
import * as yup from 'yup';
import { IoMdPerson } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { GiPadlock } from 'react-icons/gi';
import { logo, signup } from '../assets/images';




const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

// eslint-disable-next-line react/prop-types
const Signup = ({setIsSignUp}) => {
    const handleSignup = () => {
        setIsSignUp(true);
    };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data); 
  };


  return (
    <div className="flex text-white px-6 md:px-0 bg-[#00906C]">
      {/* Image */}
      <div className="w-[619px] hidden lg:block">
        <img src={signup} className="h-screen w-[619px] absolute" alt="" />
        <p className="relative text-white text-center px-20 top-72 text-[26.18px]">Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae vitae pellentesque.</p>
      </div>
      {/* Forms */}
      <div className="lg:w-[916px] w-full h-screen ">
        <div className="flex justify-center mt-10">
          <img src={logo} alt="" className="w-40" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="text-center md:w-[514px] mx-auto">
          <h1 className="font-bold text-2xl md:text-6xl my-12">Create Account</h1>

          <div className="flex gap-2 bg-[#F6F6F6] border-2 border-[#079077] rounded-xl px- py-2 text-[#00906C]">
            <IoMdPerson size={30} />
            <input type="text" {...register('fullName')} placeholder="Full Name" className="w-full outline-none bg-[#F6F6F6]" />
          </div>
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

          <div className="flex gap-2 py-2 bg-[#F6F6F6] border-2 border-[#079077] rounded-xl px-2 text-[#00906C] mt-10">
            <MdEmail size={30} />
            <input type="email" {...register('email')} placeholder="Email" className="w-full outline-none bg-[#F6F6F6]" />
          </div>
          {errors.email && <p className="text-red-500 mb-10">{errors.email.message}</p>}

          <div className="flex gap-2 py-2 mt-10 bg-[#F6F6F6] border-2 border-[#079077] rounded-xl px-2 text-[#00906C]">
            <GiPadlock size={30} />
            <input type="password" {...register('password')} placeholder="Password" className="w-full outline-none bg-[#F6F6F6]" />
          </div>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <div>
            <button className="px-12 text-white font-medium hover:bg-[#185248f4] mt-8 text-[20px] border-2 border-white rounded-full py-3" type="submit">Sign Up</button>

            <p className="text-center text-[12px] mt-8">Do you have an account? <a href="#" onClick={handleSignup} className="text-black hover:text-slate-700">LOGIN</a></p>
          </div>
        </form>
      </div>
     
     
    </div>
  );
};

export default Signup;
